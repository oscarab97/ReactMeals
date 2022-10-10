
import StateContext from '../contexts/state';
import {useContext} from 'react'
import actions from "../reducers/actions"
import { Link } from "react-router-dom";
import styles from'../Styles/Navigation.module.css';
function Navigation(){

    const { state, dispatch } = useContext(StateContext);
	const total = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    
    function openModal() {
		dispatch({
			type: actions.OPEN_MODAL,
		});
	}
    return (
        <nav class="navbar navbar-dark bg-danger fixed-top">
        <div class="container-fluid">
            <Link to="/home" className="nav-link">
            <a class="navbar-brand">REACTMEALS APP</a>
            </Link>
            <div className="d-flex " data-bs-toggle="modal" >
            <figure onClick={openModal} className={styles.figure}>
            <span class="material-icons">shopping_cart_checkout</span>
                <a>carrito</a>
				<small>{total}</small>
			</figure>
               
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" href="/home" id="offcanvasDarkNavbarLabel">React Meals</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <Link to="/home" className="nav-link">
                            <a class="nav-link">Home</a>
                        </Link>
                        <Link to="/menu" className="nav-link">
                            <a class="nav-link" >Menu</a>
                        </Link>
                        
                    </ul>
                </div>
            </div>
        </div>
    </nav>
      
  
        
    )
}
export default Navigation