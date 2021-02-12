import React from 'react';

import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox'
import 'bulma/css/bulma.css';
import AddFood from './components/AddFood/AddFood';
import SearchBar from "./components/SearchBar/SearchBar"

function App() {

const [allFood, setFood] = React.useState(foods);
const [filterFoodSearch, setFilterFood] = React.useState(foods)
const addFood = (newfood) => {
  setFood([newfood, ...allFood])

}

const filterFood = (value) => {
  if (value !== ""){
    const foodfilter = allFood.filter(food => (food.name.toLowerCase().includes(value.toLowerCase())))
    setFilterFood(foodfilter)

  } else {
    setFilterFood([...allFood])
  }
}

  return (
    <div>
      <div>
        <SearchBar filterFood={filterFood} state={allFood}/>
      </div>
      <div>
        <AddFood added={addFood}/>
      </div>
      <div>
      {filterFoodSearch.map((food,idx) => (
        <FoodBox key={idx} data={food} />
      ))}
      </div>


    </div>
  );
}

export default App;
