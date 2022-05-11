


import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsArr from './data/foods.json';
import FoodBox from './component/FoodBox';

function App() {


  const [foods, setFoods] = useState(foodsArr)


  return (
    
    
    
    
    
    
    <div className="App">
      
      { foods.map((food, index) => {
        return <FoodBox listOfFoods={food} key={index}/>
      }) }
    
    
    
    
    
    
    
    
    
    
    
    
    </div>




  );
}

export default App;
