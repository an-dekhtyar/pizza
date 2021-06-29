import {Header} from './components'
import {Main, Cart} from './pages'
import {Route} from 'react-router-dom'
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector, useStore} from "react-redux";
import {getPizzas} from "./bll/pizzas-reducer";


function App() {


    const dispatch = useDispatch()
    const pizzas = useSelector(state => state.pizzas.items)

    useEffect(() => {
        dispatch(getPizzas())
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path="/" render={() => <Main items={pizzas}/>}/>
                <Route exact path="/cart" component={Cart}/>
            </div>
        </div>
    );
}

export default App;
