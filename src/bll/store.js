import {applyMiddleware, combineReducers, createStore} from "redux";
import {cartReducer} from "./cart-reducer";
import {filterReducer} from "./filter-reducer";
import {pizzasReducer} from "./pizzas-reducer";
import thunk from 'redux-thunk'


const reducers = combineReducers({
    cart: cartReducer,
    filter: filterReducer,
    pizzas:pizzasReducer
})


export const store = createStore(reducers,applyMiddleware(thunk),)


