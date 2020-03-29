import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from "./foods.json"
import FoodBox from "./components/FoodBox"
import Form from "./components/Form"

const App = () => {
  const [newFood, setNewFood] = useState(foods) //newFood es array inicial del json. Lo pasamos aquí para al añadir no tener que modificarlo en el json.
  const [todaysFood, setTodaysFood] = useState([]); //Creamos un estado inicial todaysFood con un array vacio [] ????
  const [isForm, setIsForm] = useState(false) // Crea estado true/false para renderizar el Form. Inicialmente es falso=>no se pinta.
  // console.log("this is the useState", useState(), "and array of initial json foods", foods)
  // console.log("this is the todaysFood", todaysFood, "AND setTodaysFood", setTodaysFood)
  // console.log("this is newFood", newFood, "this is setNewFood", setNewFood)
  // console.log("this is isForm", isForm, "AND setIsForm", setIsForm)

  const renderFoods = () =>
    foods.map(food =>
      <FoodBox food={food} key={food.name} />

    );






  return (
    < div className="App" >
      <button className="add-button" onClick={() => setIsForm(!isForm)}>Add Food</button>
      {isForm && <Form setNewFood={setNewFood} newFood={newFood} />}
      <div className="row">
        <div className="food-container">{renderFoods()}</div>
      </div>
    </div >

  );
};

export default App;
