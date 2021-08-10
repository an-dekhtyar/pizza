
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
const SET_PIZZAS = 'PIZZAS/SET-PIZZAS'
const SET_LOADING = 'PIZZAS/LOADING'


// action Creators
export const setPizzas = (items) => ({ type:SET_PIZZAS, items })
export const setLoading = (value) => ({ type:SET_LOADING, value })
