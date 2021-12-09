import 'bulma/css/bulma.css';

import React, { useState } from 'react';
import foods from './foods.json'
import Foodbox from './components/FoodBox';

import './App.css';

function App() {
  //A. definir nueva comida
  const [comida, setFood] = useState({
    name: "",
    calories: 0,
    image: "",
    quantity: 0,

  })

  //Funciones del componente
  const capturarDatos = (e) => {
    return setFood({
      ...comida,
      [e.target.name]: e.target.value
    })
  }

  //CRUD
  //Crear
  const addFood = (e) => {
    e.preventDefault()
    setFood({
      name: "",
      calories: 0,
      image: "",
      quantity: 0,
    })
  }

  return (
    <>
      <h4>Add food</h4>
      <form onSubmit={(event) => { addFood(event) }}>
        <input
          name="name"
          value={comida.name}
          onChange={(event) => { capturarDatos(event) }}
        />
        <input
          name="calories"
          value={comida.calories}
          onChange={(event) => { capturarDatos(event) }}
        />
        <input
          name="image"
          value={comida.image}
          onChange={(event) => { capturarDatos(event) }}
        />
        <input
          name="quantity"
          value={comida.quantity}
          onChange={(event) => { capturarDatos(event) }}
        />
        <br />
        <button>Add this food</button>
      </form>

      <div className="App">
        <Foodbox data={foods} />

      </div>

    </>
  );
}

export default App;