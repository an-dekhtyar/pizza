
const initialState = {
    sortBy:'popular',
    category: 0
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.sortType
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
export const setSortBy = (sortType) => ({ type:SET_CATEGORY, sortType })
export const setCategory = (category) => ({ type:SET_SORT_BY, category })