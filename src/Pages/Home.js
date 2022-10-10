import { Link } from 'react-router-dom'
import styles from '../Styles/Home.module.css'
function Home(){
    return( 
        <div className={styles.fondo}>
            <div className={styles.bienvenido}>
            <h1>Bienvenido a nuestro sitio de comida</h1>
                    
            </div>
            <div className={styles.button}>
                    <Link to="/menu">
                    <button
                        type="button"
                        className={styles.myButton}
                        >
                        Ir a Menu
                    </button>
                    </Link> 
                    
            </div>
            <div>
            <img src="https://th.bing.com/th/id/R.0b40294263fc52c5b2b7b756e3d013ad?rik=I%2fRs%2bnsO5EYK8w&pid=ImgRaw&r=0" className={styles.image} />

            </div>
        </div>
  

    
   )
}
export default Home