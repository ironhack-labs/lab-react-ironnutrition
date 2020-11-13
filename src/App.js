import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import Form from './components/Form';
import Search from './components/Search';

function App() {

  
  let foodsAdd = [];

  const [stateAdd, setStateAdd] = useState({foodsArr: foodsAdd, quantity: 1})

  let calories = 0;

  const [valueAdd, setValueAdd] = useState(calories)

  function handleClickAdd(event){
  foods.push({name: props.name, calories: (props.calories * stateAdd.quantity), amount: stateAdd.quantity});
  calories += (stateAdd.quantity * props.calories);
  setValueAdd(calories);
  setStateAdd({...stateAdd, foodsArr: foodsAdd});
  }

  function handleChangeAdd(event){
  const {value} = event.target;
  setStateAdd({...stateAdd, quantity: value})
  }

  const [state, setState] = useState([...foods]);

  const [value, setValue] = useState('');

  function handleChange(event) {
    const { value } = event.target;
    setValue(value);
    let newState = [...foods].filter((elem) => elem.name.toLowerCase().includes(value));
    setState(newState);
  }

  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <div>
        <Search value={value} onChange={handleChange} />
      </div>
      <div className="foods">
        <Form />
        <ul>
          {state.map((element) => (
            <li id={element.name}>
              <FoodBox
                name={element.name}
                calories={element.calories}
                image={element.image}
                onClick={handleClickAdd}
                onChange={handleChangeAdd}
                value={valueAdd}
              />
            </li>
          ))}
        </ul>
        <div>
  <h2>Today's foods</h2>
    <ul>{stateAdd.foodsArr.map((elem) => <li>{elem.amount} {elem.name} = {elem.calories} cal</li>)}</ul>
    <p>Total: {valueAdd} cal</p>
  </div>
      </div>
    </div>
  );
}

export default App;
