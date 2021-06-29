import axios from "axios";

export const pizzasApi = {
    getPizzas(){
        debugger
        return axios.get('http://localhost:3000/db.json')
    }
}