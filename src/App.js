import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import AddFood from './components/AddFood';
//import { Link, Route } from 'react-router-dom';


function App() {


  const [foodList, setFoodList] = useState(foods)

  const listaFoods = foodList.map(food => {
    return <FoodBox food={food} />
  })

 



  return (
    <div className="App">
       <AddFood />
      {listaFoods}
     
    </div>
  );
}

export default App;
