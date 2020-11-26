import React, { useState } from "react";
import './App.css';
import 'bulma/css/bulma.css';
import foodList from './foods.json';
import FoodBox from './components/foodbox.js'
import AddFoodForm from './components/addFoodForm.js';

function App() {
  const [foodState, setFoodState] = useState(foodList);

  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => setShowForm(!showForm);

  const addFoodHandler = (newFoodItem) => {
    console.log(newFoodItem)
    const stateCopy = [...foodState];
    
    stateCopy.push(newFoodItem);
    setFoodState(stateCopy);
    //need to toggle form
    toggleForm();

  };

  return (
    <div className="App">
      <h1 className="title is-2">IronNutrition</h1>

      <div className="columns">
        <div className="column">
          <div className="food-container">
            {foodState.map((item, index) => (
                <FoodBox key={index} food={item} />)
                )}
          </div>
        </div>
        <div className="column">
          <div>
              {showForm && <AddFoodForm handleLiftFoodFromState={addFoodHandler}/>}
            <button class="button" onClick={() => toggleForm(showForm)}>Add Food</button>
          </div>
        </div>
      
      </div> 
      

    
    
    </div>
  );
}

export default App;
