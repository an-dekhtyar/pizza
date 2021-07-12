import axios from "axios";

export const pizzasApi = {
    getPizzas(){
        return axios.get('http://localhost:3001/pizzas')
    },
    getSortPizza(sortType){
        return axios.get(`http://localhost:3001/pizzas?_sort=${sortType.type}&_order=${sortType.order}`)
    },
    changeCategory(category){
        return axios.get(`http://localhost:3001/pizzas?category=${category}`)
    }
}