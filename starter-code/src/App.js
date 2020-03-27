import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from "./foods.json"
import FoodBox from "./components/FoodBox"


const App = () => {
  const [todaysFood, setTodaysFood] = useState([]); //Creamos un estado inicial todaysFood con un array vacio []
  console.log("this is the useState", useState())
  console.log("this is the array of the initial foods", foods)
  console.log("this is the todaysFood", todaysFood)
  console.log("this is the setTodaysFood", setTodaysFood)

  const renderFoods = () =>
    foods.map(food =>
      <FoodBox food={food} />

    );



  return (
    < div className="App" >
      <div className="row">
        <div className="food-container">{renderFoods()}</div>

      </div>
    </div >

  );
};

export default App;
