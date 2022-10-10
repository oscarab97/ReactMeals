import styles from "../Styles/checkout.module.css";
import { Link } from "react-router-dom";
function Checkout (){
    return(
        <>
           
           <div className={styles.fondo}>
            <div className={styles.bienvenido}>
            <h1>Gracias por su compra!</h1>
                    
            </div>
            <div className={styles.button}>
                    <Link to="/home">
                    <button
                        type="button"
                        className={styles.myButton}
                        >
                        Regresar a Home
                    </button>
                    </Link> 
                    
            </div>
            <div>
            <img src="https://th.bing.com/th/id/R.0f1f5835674ba6672556090d5313e057?rik=szkd%2b0Y2P2dQkA&pid=ImgRaw&r=0" className={styles.image} />

            </div>
        </div>
      
            
            
            
        </>    
    )
}
export default Checkout