import {Header} from './components'
import {Main, Cart} from './pages'
import { Route } from 'react-router-dom'
import React, {useEffect, useState} from "react";
import axios from "axios";




function App() {

  const [pizzas, setPizzas] = useState([])

  useEffect(()=>{

    axios.get('http://localhost:3000/db.json')
        .then(data => setPizzas(data.data.pizzas))
  },[])

  return (
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Route exact path="/"  render={()=> <Main items={pizzas}/>} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </div>
  );
}

export default App;
