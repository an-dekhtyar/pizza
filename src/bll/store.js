import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import {cartReducer} from "./cart-reducer";
import {filterReducer} from "./filter-reducer";
import {pizzasReducer} from "./pizzas-reducer";
import thunk from 'redux-thunk'


const reducers = combineReducers({
    cart: cartReducer,
    filter: filterReducer,
    pizzas:pizzasReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)))


