import React from 'react';

import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox'
import 'bulma/css/bulma.css';
import AddFood from './components/AddFood/AddFood';
import SearchBar from "./components/SearchBar/SearchBar"
import TodayFood from "./components/TodayFood/TodayFood"

function App() {

const [allFood, setFood] = React.useState(foods);
const [filterFoodSearch, setFilterFood] = React.useState(foods)
const [foodToday, setToday] = React.useState([])

//Añadir una nueva comida
const addFood = (newfood) => {
  setFood([newfood, ...allFood])
}

//Barra de busqueda - Filtrar, si esta vacio mostrar todos
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
        <SearchBar filterFood={filterFood} />
      </div>
      <div>
        <AddFood added={addFood}/>
      </div>
      <div>
      {filterFoodSearch.map((food,idx) => (
        <FoodBox key={idx} data={food} />
      ))}
      </div>
      <div>
        <TodayFood />
      </div>

    </div>
  );
}

export default App;
