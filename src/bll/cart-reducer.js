
const initialState = {
    items: {},
    totalPrise:0,
    totalPizzasCount:0
}


export const cartReducer = (state = initialState, action) => {
    switch (action.type){
        case CART_ADD_PIZZA_TO_CART: {

            const newItems = {
                ...state.items,
                [action.pizza.id]: !state.items[action.pizza.id]
                    ?
                    [action.pizza]
                    :
                    [...state.items[action.pizza.id], action.pizza]
            }
            const allPizzas = [].concat.apply([], Object.values(newItems))
            const totalPrise = allPizzas.reduce((acc, ell) => ell.price + acc,0)

            return {
                ...state,
                items: newItems,
                totalPrise: totalPrise,
                totalPizzasCount: allPizzas.length
            }
        };

        default: return state
    }
}

// action Types
const CART_ADD_PIZZA_TO_CART = 'CART-ADD-PIZZA-TO-CART'

// action Creators
export const addPizzaToCart = (pizza) => ({ type:CART_ADD_PIZZA_TO_CART, pizza })

// thunk
