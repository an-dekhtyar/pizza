import axios from "axios";
import {pizzasApi} from "../api/pizzas-api";


const initialState = {
    items:[],
    isLoaded: false
}

export const pizzasReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_PIZZAS:
            return {
                ...state,
                items: action.items
            };

        default: return state
    }
}

// action Types
const SET_PIZZAS = 'SET-PIZZAS'


// action Creators
export const setPizzas = (items) => ({ type:SET_PIZZAS, items })

// Thunk
export const getPizzas = () => (dispatch) => {
    pizzasApi.getPizzas()
        .then(data => dispatch(setPizzas(data.data.pizzas)))
}
