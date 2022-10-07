import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Menu from "./Pages/Menu"
import Navigation from './component/Navigation'
import Slide from './component/Slide'
import {useReducer} from 'react'
import reducer from "./reducers/reducer";
import initialState from "./reducers/initialState";
import StateContext from "./contexts/state";
import NotFound from './Pages/NotFound'


function App(){
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <StateContext.Provider value={{ state, dispatch }}>
            <BrowserRouter>
                <Navigation />
                <div>
                <Slide />
                </div>
                <Routes>
                    <Route path="/menu" element={<Menu/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
        </StateContext.Provider>
    )
}
export default App