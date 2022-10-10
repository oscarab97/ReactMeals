import { render, screen } from "@testing-library/react";
import Menu from '../Pages/Menu'
import StateContext from "../contexts/state";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: jest.fn(),
}));

describe("Menu", () => {
	let dispatch;
	let container;

	beforeEach(async () => {
		// jest.fn() crea un mock
		window.fetch = jest.fn();
		dispatch = jest.fn();

		window.fetch.mockResolvedValueOnce({
			json: async () => [
				{
					id: 1,
					name: "El Cassoulet",
					price: 100,
					description: "Originario de Laguedoc-Roussillon, compuesto de alubias blancas, muslos de pato y carne de cerdo.",
				},
                {
					id: 5,
					name: "Ratatouille",
					price: 250,
					description: "Consiste en un estofado de diferentes hortalizas típicas del sur de Francia. Proviene de la región de Provenza y de Niza",
				},
			],
			ok: true,
		});

		const rendered = await act(async () =>
			render(
				<StateContext.Provider value={{ dispatch, state: {} }}>
					<Menu />
				</StateContext.Provider>
			)
		);

		container = rendered.container;
	});

	it("should render", async () => {
		const menuContainer = container.querySelector("#container");
		expect(menuContainer).toBeTruthy();
	});

	it("should display meals 1", async () => {
		const name = await screen.findByText("El Cassoulet");
		const description = await screen.findByText("Originario de Laguedoc-Roussillon, compuesto de alubias blancas, muslos de pato y carne de cerdo.");

		expect(name).toBeTruthy();
		expect(description).toBeTruthy();
	});
    it("should display meals 2", async () => {
		const name = await screen.findByText("Ratatouille");

		expect(name).toBeTruthy();
	});
    
});