import React, { useState } from 'react';
import foods from './foods.json';
import FoodBox from  './FoodBox.jsx'
import 'bulma/css/bulma.css';
import AddFood from './AddFood';

function App() {

  const initialState = {
    form: {
      name: '',
      image: '',
      calories: 0,
      quantity: 0
    },
    foodList: [...foods]
    
  }

  const [newFood, setNewFood] = useState(initialState)

  const renderFoods = newFood.foodList.map(food => (
    <FoodBox 
      name={food.name}
      image={food.image}
      calories={food.calories}
      key={food.name}
    />
  ))



  return (
    <main className="columns">
      <div className="column">
        {renderFoods}
      </div>
      <div className="column">
        <AddFood newFood={newFood} setNewFood={setNewFood}/>
      </div>
    </main>
  );
}

export default App;
