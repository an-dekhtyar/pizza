import {pizzasApi} from "../api/pizzas-api";
import {setPizzas} from "./pizzas-reducer"
import {setLoading} from './pizzas-reducer'

const initialState = {
    name: 'популярности',
    sortType: {type: 'rating', order: 'desc'},
    category: null
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_SORT_BY:
            return {
                ...state,
                sortType: {...action.sortType},
                name:action.name,
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
const SET_CATEGORY = 'FILTER/SET-CATEGORY'
const SET_SORT_BY = 'FILTER/SET-SORT-BY'

// action Creators
export const setSortBy = (sortType, name) => ({ type:SET_SORT_BY, sortType, name })
export const setCategory = (category) => ({ type:SET_CATEGORY, category })

//thunk

export const changeCategory = (sortType, category) => async (dispatch) => {
    dispatch(setLoading(false))
    let data = await pizzasApi.getPizzas(sortType, category)
    dispatch(setCategory(category));
    dispatch(setPizzas(data.data))
    dispatch(setLoading(true))

}
export const sortPizzas = (sortType, category, name) => async (dispatch) => {
    dispatch(setLoading(false))
    let data = await pizzasApi.getPizzas(sortType, category)
    dispatch(setSortBy(sortType, name))
    dispatch(setPizzas(data.data))
    dispatch(setLoading(true))
}

