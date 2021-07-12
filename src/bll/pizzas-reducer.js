import {pizzasApi} from "../api/pizzas-api";
import { setCategory } from "./filter-reducer";


const initialState = {
    items:[],
    isLoaded: true
}

export const pizzasReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_PIZZAS:
            return {
                ...state,
                items: action.items,
            };
        case SET_LOADING:{
            return {
                ...state,
                isLoaded:action.value
            }
        }

        default: return state
    }
}

// action Types
const SET_PIZZAS = 'SET-PIZZAS'
const SET_LOADING = 'SET-LOADING'


// action Creators
export const setPizzas = (items) => ({ type:SET_PIZZAS, items })
export const setLoadeing = (value) => ({ type:SET_LOADING, value })

// Thunk
export const getPizzas = () => async (dispatch) => {
    dispatch(setLoadeing(false))
    let data = await pizzasApi.getPizzas()
    dispatch(setCategory(null))
    dispatch(setPizzas(data.data))
    dispatch(setLoadeing(true))
}
