import { useEffect, useState } from "react";
import MealItem from "../component/MealItem"
import MenuContext from "../contexts/menu";
import useHttp from "../hooks/useHttp";
function Menu(){

    const [meals, setMeals] = useState([]);
    const { request } = useHttp();

    useEffect(() => {
		async function fetchMeals() {
			const data = await request({ url: "https://react-http-9470a-default-rtdb.firebaseio.com/meals.json" });
			setMeals(data || []);
		}

		fetchMeals();
	}, [request]);

    return(
        <MenuContext.Provider value={meals}>
            <MealItem/>
        </MenuContext.Provider>

    )
}
export default Menu
