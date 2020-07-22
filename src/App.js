import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import AddFood from './components/AddFood';


function App() {


  const [foodList, setFoodList] = useState(foods)

  let listaFoods = foodList.map(food => {
    return <FoodBox food={food} />
  })


  const searchBar = (e) => {
    let filtro = e.target.value
    let copi = [...foodList]
    
    setFoodList(copi = copi.filter(food => {
      return food.name.toLowerCase().includes(filtro)
    }))
  }




  return (
    <div className="App">
      <input type="text" name="seach" onChange={searchBar} />
      {listaFoods}
      <AddFood foods={foodList} modifFoodList={setFoodList} />
    </div>
  );
}

export default App;
