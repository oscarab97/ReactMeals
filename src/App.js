import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navigation from './component/Navigation'
import Slide from './component/Slide'
import {useReducer, useState, useEffect} from 'react'
import reducer from "./reducers/reducer";
import initialState from "./reducers/initialState";
import StateContext from "./contexts/state";
import NotFound from './Pages/NotFound'
import CartModal from './component/cart-modal';
import Home from './Pages/Home'
import CheckOut from './Pages/Checkout'
import Menu from './Pages/Menu';
function App(){

    // const [meals, setMeals] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState);
    


    return(
        <StateContext.Provider value={{ state, dispatch }}>
            <BrowserRouter>
                <Navigation />     
                <CartModal/>           
                <Slide />                
                <Routes>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/checkout" element={<CheckOut/>} />
                    <Route path="/menu" element={<Menu/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
      
            
        </StateContext.Provider>
    )
}
export default App