import React, { useState } from 'react';
import 'bulma/css/bulma.css';

import './App.css';
import foods from './foods.json';
import FoodBox from './components/foodbox/FoodBox';
import Form from './components/form/Form';
import Search from './components/search/Search';

function App() {
  let foodsArr = [];

  const [stateAdd, setStateAdd] = useState(foodsArr);

  let calories = 0;

  const [valueAdd, setValueAdd] = useState(calories);

  const [state, setState] = useState([...foods]);

  const [value, setValue] = useState('');

  function handleChange(event) {
    const { value } = event.target;
    setValue(value);
    let newState = [...foods].filter((elem) =>
      elem.name.toLowerCase().includes(value)
    );
    setState(newState);
  }

  return (
    <div className="App">
      <h1 className="title is-1">IronNutrition</h1>
      <div className="searchbar">
        <Search value={value} onChange={handleChange} />
      </div>
      <main>
        <div className="foods">
          <ul>
            {state.map((element) => (
              <li id={element.name}>
                <FoodBox
                  name={element.name}
                  calories={element.calories}
                  image={element.image}
                  setStateAdd={setStateAdd}
                  stateAdd={stateAdd}
                  setValueAdd={setValueAdd}
                  valueAdd={valueAdd}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar">
          <h2 className="title is-4">Today's foods</h2>
          <ul>
            {stateAdd.map((elem) => (
              <li className="foodAdded" key={elem.name.toLowerCase()}>
                <img src={elem.image} /> {elem.quantity} {elem.name} ={' '}
                {elem.calories} cal
                <button onClick="handleClick">
                  <img
                    src="https://www.iconsdb.com/icons/preview/red/trash-10-xxl.png"
                    alt="Trash"
                  />
                </button>
              </li>
            ))}
          </ul>
          <p className="title is-5 total">Total: {valueAdd} cal</p>
          <div className="side-form">
            <Form state={state} setState={setState} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
