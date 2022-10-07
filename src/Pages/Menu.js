import Slide from "../component/Slide";
import Navigation from "../component/Navigation";
import MenuContext from "../contexts/menu";
import StateContext from "../contexts/state";
import { useReducer, useState, useEffect } from "react";
import reducer from "../reducers/reducer";
import initialState from "../reducers/initialState";
import useHttp from "../hooks/useHttp";
import MealItem from "../component/MealItem";

function MenuPages() {

  const [meals, setMeals] = useState([]);
	const [state, dispatch] = useReducer(reducer, initialState);
  const { request } = useHttp();

  useEffect(() => {
		async function fetchMeals() {
			const data = await request({ url: "https://react-http-9470a-default-rtdb.firebaseio.com/meals.json" });
			setMeals(data || []);
		}

		fetchMeals();
	}, [request]);

  

  return (
    <MenuContext.Provider value={meals}>
      <StateContext.Provider value={{ state, dispatch }}>
        <MealItem></MealItem>
      </StateContext.Provider>
    </MenuContext.Provider>
  );
}

export default MenuPages;
