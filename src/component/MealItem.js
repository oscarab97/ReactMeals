import { useContext, useRef } from "react";
import styles from"../Styles/MealItem.module.css";
import StateContext from "../contexts/state";
import actions from "../reducers/actions.js";
import MenuContext from "../contexts/menu.js";

function MealItem() {
  const inputs = useRef([]);
  const meals = useContext(MenuContext);
  const { dispatch } = useContext(StateContext);

  function addMeal(index) {
    console.log("Agregando");
    const meal = meals[index];
    const input = inputs.current[index];

    if (input.value) {
      console.log(input.value);
      dispatch({
        type: actions.ADD_MEAL,
        payload: { meal, quantity: parseInt(input.value) },
      });
      input.value = "";
    }
  }

  return (
    <>
      <div className="row">
        <div className={styles["expenses"]}>
          <div id="container" className={styles["container"]}>
            <div className={styles["menu"]}>
              <h2 className={styles["menu-group-heading"]}>Principal</h2>
              <div className={styles["menu-group"]}>
                {meals.map((item, index) => (
                  <div className={styles["menu-item"]}>
                  <img src={item.image} className={styles["menu-item-image"]} />
                  <div className={styles["menu-item-body"]}>
                    <div className={styles["menu-item-body-text"]}>
                      <h3 className={styles["menu-item-heading"]}>
                        <span className={styles["menu-item-name"]}> {item.name}</span>
                        <span className={styles["menu-item-price"]}>${item.price}</span>
                      </h3>
                      <p className={styles["menu-item-description"]} >{item.description}</p>
                    </div>
                    <div className ={styles[ "menu-item-body-controls"]}>
                    <input className={styles["menu-item-body-input"]} type="number" min="0" placeholder="0" ref={(el) => (inputs.current[index] = el)}/>
                    <button
                      type="button"
                      className={styles["menu-item-button"]}
                      onClick={() => addMeal(index)}
                    >
                      + Agregar
                    </button>
                  </div>
                  </div>
                  
                  </div>                 
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MealItem;
