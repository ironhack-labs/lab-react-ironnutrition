import { useState } from "react";
import React from 'react';
import 'bulma/css/bulma.css';
import foodsArr from './foods.json';
import Main from "./components/Main";
import AddFood from "./components/AddFood";
import Search from "./components/Search";

function App() {
  const [foods, setFoods] = useState(foodsArr);
  const [ allFoods, setAllFoods ] = useState(foodsArr);
  const [ showForm, setShowForm ] = useState(false);

  const addNewFood = (food) => {
    setFoods( [ food,...foods] );
  }
  function displayForm() {
    setShowForm(!showForm);
  }

  return (
    <div className="App">
      <h1>Iron Nutrition</h1>
      <nav>
        <button className="button is-info" onClick={displayForm}>Add new food</button>
         {showForm && <AddFood addNewFood={addNewFood} displayForm={displayForm}/>}
      </nav>
      <div className="columns">

        <div className="column">

          <Main foodsArr={foods} />
        </div>
        <div className="column">

        </div>
      </div>
    </div>
  );
}

export default App;
