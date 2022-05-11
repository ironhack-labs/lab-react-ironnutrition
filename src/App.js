import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';

import foodsArr from './data/foods.json';
import FoodBox from './component/FoodBox';
import AddFood from './component/AddFood';

function App() {


  const [foods, setFoods] = useState(foodsArr)
  const [isShow, setIsShow] = useState(false)


  const createFood = (newFoods) => {
    setFoods((prevFoods) => {
      return [...prevFoods, newFoods]
    })
  }


  const showForm = () => {
    setIsShow(!isShow);
  }

  return (

    <div className="App">

      <h1 className='title'>Iron Nutrition</h1>


      <div className='add-button'>
        <button onClick={showForm}>Add new foods</button>
        {isShow ? <AddFood call callbackCreateFood={createFood} /> : null}
      </div>

      <div>
        {foods.map((food, index) => {
          return <FoodBox listOfFoods={food} key={index} />
        })}
      </div>


    </div>




  );
}

export default App;
