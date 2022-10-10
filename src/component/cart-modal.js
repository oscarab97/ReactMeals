import Backdrop from "../portals/backdrop";
import Modal from "../portals/modal";
import Button from "../UI/button";
import styles from "../Styles/cart-modal.module.css";
import StateContext from "../contexts/state";
import { useContext } from "react";
import actions from "../reducers/actions";
import { Link } from "react-router-dom";

function CartModal() {
	const { state, dispatch } = useContext(StateContext);
	let total=0;

	function calTotal(item){
		total=total+(item.meal.price*item.quantity)
	}
	function closeModal() {
		dispatch({
			type: actions.CLOSE_MODAL,
		});
	}
	function emptyCart(meal) {
		dispatch({
			type: actions.EMPTY_CART,
			payload: { meal, quantity: parseInt(0) },
		});
		closeModal()
	}
	function increment(id) {
		dispatch({
			type: actions.UPDATE_MEAL,
			payload: { id, quantity: 1 },
		});
	}

	function decrement(id) {
		dispatch({
			type: actions.UPDATE_MEAL,
			payload: { id, quantity: -1 },
		});
	}

	return state.isOpen ? (
		<>
			<Backdrop />
			<Modal>
				<ul className={styles["cart-modal"]}>
					{state.cart.map((cartItem) => (
						<li>
							<section className={styles["cart-item"]}>
								<article>
								<img src={cartItem.meal.image} className={styles["image"]} />

								</article>
								<article>

									<h2>{cartItem.meal.name}</h2>
									<div>
										<h4>$ {cartItem.meal.price}</h4>
										<figure>
											<h4>x {cartItem.quantity}</h4>
										</figure>
									</div>
								</article>
								<article>
									<Button
										outline
										square										
										onClick={() => decrement(cartItem.meal.id)}
									>
										-
									</Button>
									<Button
										outline
										square
										onClick={() => increment(cartItem.meal.id)}
									>
										+
									</Button>
								</article>
							</section>
							{calTotal(cartItem)}

						</li>
					))}
					
					<div className={styles.total}>
							<h5>total</h5>
							<h3>{total}</h3>
					</div>
					<li>
						
						<Button outline onClick={closeModal}>
							Cerrar
						</Button>
						<Link to="/checkout" onClick={() => emptyCart(state.cart.quantity)}>
							<Button>Ordenar</Button>
						</Link>
					</li>
				</ul>
			</Modal>
		</>
	) : null;
}

export default CartModal;
