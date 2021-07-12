import {pizzasApi} from "../api/pizzas-api";
import {setPizzas} from "./pizzas-reducer"
import {setLoadeing} from './pizzas-reducer'

const initialState = {
    sortBy:{
        type: 'id',
        order: 'asc'
    },
    category: null
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_SORT_BY:
            return {
                ...state,
                sortBy: {...action.sortType}
            };
        case SET_CATEGORY:
            return {
                ...state,
                category: action.category
            }

        default: return state
    }
}

// action Types
const SET_CATEGORY = 'SET-CATEGORY'
const SET_SORT_BY = 'SET-SORT-BY'

// action Creators
export const setSortBy = (sortType) => ({ type:SET_SORT_BY, sortType })
export const setCategory = (category) => ({ type:SET_CATEGORY, category })

//thunk

export const changeCategory = (category) => async (dispatch) => {
    dispatch(setLoadeing(false))
    let data = await pizzasApi.changeCategory(category)
    dispatch(setCategory(category));
    dispatch(setPizzas(data.data))
    dispatch(setLoadeing(true))

}
export const sortPizzas = (sortType) => async (dispatch) => {
    dispatch(setLoadeing(false))
    let data = await pizzasApi.getSortPizza(sortType)
    dispatch(setSortBy(sortType))
    dispatch(setPizzas(data.data))
    dispatch(setLoadeing(true))
}

