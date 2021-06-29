import {Header} from './components'
import {Main, Cart} from './pages'
import {Route} from 'react-router-dom'
import React, {useEffect } from "react";
import {useDispatch} from "react-redux";
import {getPizzas} from "./bll/pizzas-reducer";


function App() {


    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getPizzas())
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path="/" render={() => <Main />}/>
                <Route exact path="/cart" component={Cart}/>
            </div>
        </div>
    );
}

export default App;
