import axios from "axios";

export const pizzasApi = {
    getPizzas(){
        console.log('был выполнен запрос')
        return axios.get('http://localhost:3000/db.json')
    }
}