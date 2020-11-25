import React, { useState } from "react";
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/foodbox.js'
import AddFoodForm from './components/addFoodForm.js';

function App() {
  const [foods, setFoods] = useState(foods);
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => setShowForm(!showForm);

  const addFoodHandler = (newFoodItem) => {
    const foodsCopy = [...foods];
    foodsCopy.push(newFoodItem);
    setFoods(foodsCopy);
  };

  //FOODS NOT SUBMITTING TO ARRAY? I think i'm mapping the wrong array
  //FORM NOT DISSAPEARING ON SUBMIT (add toggle on submit? we'd need to import, is there another way?)


  return (
    <div className="App">
      <h1 class="title is-2">IronNutrition</h1>

      <div class="columns">
        <div class="column">
          <div className="food-container">
            {foods.map((item, index) => (
                <FoodBox key={index} food={item} />)
                )}
          </div>
        </div>
        <div class="column">
          <div>
              {showForm && <AddFoodForm addFood={addFoodHandler}/>}
            <button class="button" onClick={() => toggleForm(showForm)}>Add Food</button>
          </div>
        </div>
      
      </div> 
      

    
    
    </div>
  );
}

export default App;
