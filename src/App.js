import { useState, useEffect } from 'react';

import foodsData from './foods.json';

import FoodBox from './components/FoodBox';
import AddNewFood from './components/AddFoodForm';
import FoodCart from './components/FoodCart';

import 'bulma/css/bulma.css';
import './App.css';

// console.log(foods)

function App() {
  const [ foods, setFoods ] = useState(foodsData);
  const [ todaysFood, setTodaysFood ] = useState([]);

  const addNewFood = newFood => {
    foods.push(newFood)

    setFoods([...foods])
  }

  const filterFoods = name => {
    const filteredFoods = foodsData.filter(food => food.name.toLowerCase().includes(name));

    setFoods(filteredFoods);
  }

  const addToCart = foodInfo => {
    console.log('add to cart called')
    const foundIndex = todaysFood.findIndex(food => food.name === foodInfo.name);
    const foundFood = todaysFood[foundIndex]

    if (foundIndex > -1) {
      foundFood.quantity = Number(foundFood.quantity) + Number(foodInfo.quantity);
    } else {
      todaysFood.push(foodInfo)
    }

    setTodaysFood([...todaysFood])
  }

  const deleteFromCart = foodName => {
    const foundIndex = todaysFood.findIndex(food => food.name === foodName);

    todaysFood.splice(foundIndex, 1)

    setTodaysFood([...todaysFood])
  }

  // useEffect(() => {
  //   console.log('mounting todays foods')
  // }, [])

  // useEffect(() => {
  //   console.log('updating todays foods')
  // }, [todaysFood])

  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <input onChange={e => filterFoods(e.target.value)} />
      <FoodCart deleteFromCart={deleteFromCart}>{todaysFood}</FoodCart>
      <AddNewFood addNewFood={addNewFood} />
      {
        foods.map(food => <FoodBox {...food} addToCart={addToCart} key={food.name} />)
      }

      
    </div>
    
  );
}

export default App;
