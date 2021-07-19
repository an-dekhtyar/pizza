
const initialState = {
    items: {},
    totalPrice: 0,
    totalPizzasCount: 0
}

const getTotalPrice = array => array.reduce((acc, ell) => ell.price + acc, 0)
const getAllPizzas = newItems => {
    const items = Object.values(newItems).map(i => i.currentPizzaItems)
    const allPizzas = [].concat.apply([], Object.values(items))
    return allPizzas
}


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA_TO_CART: {

            const newCurrentPizzaItems = !state.items[action.pizza.id]
                ? [action.pizza]
                : [...state.items[action.pizza.id].currentPizzaItems, action.pizza]

            const newItems = {
                ...state.items,
                [action.pizza.id]: {
                    currentPizzaItems: newCurrentPizzaItems,
                    totalPriceItem: getTotalPrice(newCurrentPizzaItems)
                }
            }

            const allPizzas = getAllPizzas(newItems)
            const totalPrice = getTotalPrice(allPizzas)

            return {
                ...state,
                items: newItems,
                totalPrice: totalPrice,
                totalPizzasCount: allPizzas.length
            }
        };
        case CLEAR_CART:
            return {
                ...state,
                items: {},
                totalPrice: 0,
                totalPizzasCount: 0
            };
        case REMOVE_CART_ITEM: {

            let newItems = { ...state.items }
            const currentTotalPrice = newItems[action.id].totalPriceItem
            const currentTotalLength = newItems[action.id].currentPizzaItems.length
            delete newItems[action.id]

            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalPizzasCount: state.totalPizzasCount - currentTotalLength
            }
        }
        case INCREMENT_CART_ITEM: {

            const newCurrentPizzaItems = [
                ...state.items[action.id].currentPizzaItems,
                state.items[action.id].currentPizzaItems[0]
            ]
            const newItems = {
                ...state.items,
                [action.id]: {
                    currentPizzaItems: newCurrentPizzaItems,
                    totalPriceItem: getTotalPrice(newCurrentPizzaItems)
                }
            }

            const allPizzas = getAllPizzas(newItems)
            const totalPrice = getTotalPrice(allPizzas)


            return {
                ...state,
                items: newItems,
                totalPrice: totalPrice,
                totalPizzasCount: allPizzas.length

            }
        }
        case DECREMENT_CART_ITEM: {
            const oldItems =  state.items[action.id].currentPizzaItems
            const newCurrentPizzaItems = oldItems.length > 1 ? state.items[action.id].currentPizzaItems.slice(1) : oldItems

            const newItems = {
                ...state.items,
                [action.id]: {
                    currentPizzaItems: newCurrentPizzaItems,
                    totalPriceItem: getTotalPrice(newCurrentPizzaItems)
                }
            }

            const allPizzas = getAllPizzas(newItems)
            const totalPrice = getTotalPrice(allPizzas)


            return {
                ...state,
                items: newItems,
                totalPrice: totalPrice,
                totalPizzasCount: allPizzas.length
            }
        }
        default: return state
    }
}

// action Types
const ADD_PIZZA_TO_CART = 'CART/ADD-PIZZA-TO-CART'
const CLEAR_CART = 'CART/CLEAR-PIZZA'
const REMOVE_CART_ITEM = 'CART/REMOVE-CART-ITEM'
const INCREMENT_CART_ITEM = 'CART/INCREMENT-CART-ITEM'
const DECREMENT_CART_ITEM = 'CART/DECREMENT-CART-ITEM'


// action Creators
export const addPizzaToCart = (pizza) => ({ type: ADD_PIZZA_TO_CART, pizza })
export const clearPizzaFromCart = () => ({ type: CLEAR_CART })
export const removeCartItem = (id) => ({ type: REMOVE_CART_ITEM, id })
export const incCartItem = (id) => ({ type: INCREMENT_CART_ITEM, id })
export const decCartItem = (id) => ({ type: DECREMENT_CART_ITEM, id })

