import React, { useState } from 'react';
import foods from './foods.json';
import FoodBox from './FoodBox/FoodBox';
import NewFood from './newfood/NewFood';
import SearchBar from './search/SearchBar';
import 'bulma/css/bulma.css';
import './App.css';

function App() {
  const [state, setState] = useState([...foods]);
  // setState é uma função para atualizar o state
  //props só flui do pai pro filho
  return (
    <div className="App">
      <SearchBar></SearchBar>

      {state.map((itemFood) => (
        <FoodBox
          name={itemFood.name}
          calories={itemFood.calories}
          image={itemFood.image}
          quantity={itemFood.quantity}
        ></FoodBox>
      ))}

      <NewFood addFood={state} attFood={setState}></NewFood>
    </div>
  );
}

export default App;
