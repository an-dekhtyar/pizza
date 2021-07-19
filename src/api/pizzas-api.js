import axios from "axios";

export const pizzasApi = {
    getPizzas(sortType, category) {
        return axios.get(`/pizzas?${category !== null
            ? `category=${category}`
            : ''}&_sort=${sortType.type}&_order=${sortType.order}`)
    },

}