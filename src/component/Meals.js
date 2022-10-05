import MealsItem from "./MealItem";
import "./Meals.css";

function Meals({items}) {
  return (
    <div class="row">
      <div className="expenses">
        {items.map((item)=>(
          <MealsItem
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Meals;