import React, { useState } from 'react';

//import React from 'react';

import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import PostList from './components/PostList';

function App() {
  // return (
  //   <div className="App">
  //     <PostList />
  //   </div>
  // );

  const initialState = {
    form: {
      name: '',
      image: '',
      calories: 0,
      quantity: 0,
    },
    totalFood: [...foods],
  };

  //Haciendo el search

  const [searchParam, setSearchParam] = useState('');
  const handleChange = (event) => {
    const value = event.target.value;
    setSearchParam(value);
  };

  //console.log('ESTADO INICIAL', initialState);

  const [state, setState] = useState(initialState);

  const handleInput = (event) => {
    setState({
      ...state,
      form: {
        ...state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  // Función input

  const inputSave = (evento) => {
    // VALIDAR!
    evento.currentTarget.checkValidity();

    const copyTotalFood = [...state.totalFood];
    copyTotalFood.push(state.form);

    setState({
      form: {
        name: '',
        image: '',
        calories: 0,
        quantity: 0,
      },
      totalFood: copyTotalFood,
    });

    // enviar los datos al servidor...

    evento.preventDefault();
  };

  const listado = state.totalFood
    .filter((food) => food.name.toLocaleLowerCase().includes(searchParam))
    .map((food, i) => (
      <FoodBox
        name={food.name}
        image={food.image}
        calories={food.calories}
        key={food.name}
      />
    ));

  // const listado = state.totalFood.map((food) => (
  //   //console.log('ESTO ES UN FOOD', food)
  //   <FoodBox
  //     name={food.name}
  //     image={food.image}
  //     calories={food.calories}
  //     key={food.name}
  //   />
  // ));

  return (
    <div className="App">
      <label htmlFor="search-bar">Search Bar</label>
      <input
        type="text"
        value={searchParam}
        name="search-bar"
        onChange={handleChange}
      />
      <form onSubmit={inputSave}>
        <label>Name:</label>
        <input
          onChange={handleInput}
          type="text"
          name="name"
          value={state.form.name}
        />
        <label>calories:</label>
        <input
          onChange={handleInput}
          type="number"
          name="calories"
          value={state.form.calories}
        />

        <input
          onChange={handleInput}
          type="number"
          name="quantity"
          value={state.form.quantity}
        />

        <label>image:</label>
        <input
          onChange={handleInput}
          type="text"
          name="image"
          value={state.form.image}
        />
        <input type="submit" value="AddFood" />
      </form>
      {listado}
    </div>
  );
}

export default App;
