import { useState } from 'react';

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

  return (
    <div className="outter container">
      <h1 className="title">IronNutrition</h1>
      <div className="search">
        <input 
          type="text"
          placeholder="Search"
          className="input search-bar"
          onChange={e => filterFoods(e.target.value)} />
      </div>
      <div className="columns">
        <div className="food-list column container">
          {
            foods.map((food, i) => <FoodBox {...food} addToCart={addToCart} key={food.name + i} />)
          }
        </div>
        <div className="column container">
          <div className="container">
            <FoodCart deleteFromCart={deleteFromCart}>{todaysFood}</FoodCart>
          </div>
          <div className="container">
                <AddNewFood addNewFood={addNewFood} />
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
