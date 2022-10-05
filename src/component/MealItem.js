import ExpenseDate from "./ExpenseDate.js";
import "./MealItem.css";

function addHandler(name){
  console.log('Evento click')
}

function MealItem(props) {
  return (
      <div className="container">
        <div className="menu">
          <h2 className="menu-group-heading">
            Entrada
          </h2>          
          <div className="menu-group">
            <div className="menu-item">
              <img src={props.image} className="menu-item-image"/>
              <div className="meni-item-text">
                <h3 className="menu-item-heading">
                  <span className="menu-item-name"> {props.name}</span>
                  <span className="menu-item-price">${props.price}</span>
                </h3>                
                <p className="menu-item-description">
                  {props.description}</p>
                  <button type="button" className="menu-item-button" onclick={()=>addHandler(props.name)}>Agregar</button>
              </div>
            </div>
            <div className="menu-item">
              <img src={props.image} className="menu-item-image"/>
              <div className="meni-item-text">
                <h3 className="menu-item-heading">
                  <span className="menu-item-name"> {props.name}</span>
                  <span className="menu-item-price">${props.price}</span>
                </h3>                
                <p className="menu-item-description">
                  {props.description}</p>
                  <button type="button" className="menu-item-button" onclick={()=>addHandler(props.name)}>Agregar</button>
              </div>
            </div>
            <div className="menu-item">
              <img src={props.image} className="menu-item-image"/>
              <div className="menu-item-text">
                <h3 className="menu-item-heading">
                  <span className="menu-item-name"> {props.name}</span>
                  <span className="menu-item-price" >${props.price}</span>
                </h3>                
                <p className="menu-item-description">
                  {props.description}
                </p>
                  <button type="button" className="menu-item-button" onclick={()=>addHandler(props.name)}>Agregar</button>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
 
  
  );
}

export default MealItem;