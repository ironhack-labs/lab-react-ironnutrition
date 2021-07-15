import React, {useState} from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import Searchbar from './components/Searchbar';
import Total from './components/Total';

function App() {

  const [foodList, updateFoods] = useState(foods)
  const [filteredFood, updateFiltered] = useState(foods)
  const [total, updateTotal] = useState([])

  let handleNewFood = (food) => {
      updateFoods([food, ...foodList])
  }

  let handleSearch = (event) => {
      event.preventDefault()

      let filteredFoodList = foodList.filter((food) => {
        if(food.name.toLowerCase().includes(event.target.value.toLowerCase())){
          return food
        }
      })
      updateFiltered(filteredFoodList)
  }

  let handleAddTotal = (event, food) => {
      event.preventDefault()

      let totalfood = {
        name: food.name,
        calories: food.calories,
        quantity: event.target.quantity.value
      }

      updateTotal([...total, totalfood])
  }

  return (
    <div>
        <Searchbar onSearch={handleSearch}/>
        <div class="columns">
          <div class="column">
            <FoodBox foods={filteredFood} onAddNewFood={handleNewFood} onAddTotal={handleAddTotal}/>
          </div>
          <div class="column">
            <Total total={total}/>
          </div>
      </div>        
    </div>
  );
}

export default App;
