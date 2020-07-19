import React, { useState } from 'react';
import foods from './foods.json';
import FoodBox from  './FoodBox.jsx'
import AddFood from './AddFood';
import Searchbar from './Searchbar.jsx'
import 'bulma/css/bulma.css';

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

  const [currentFoods, setCurrentFoods] = useState(initialState)

  const renderFoods = currentFoods.foodList.map(food => (
    <FoodBox 
      name={food.name}
      image={food.image}
      calories={food.calories}
      key={food.name}
    />
  ))



  return (
    <main >
      <Searchbar currentFoods={currentFoods}/>
      <section className="columns">
        <div className="column">
          {renderFoods}
        </div>
        <div className="column">
          <AddFood currentFoods={currentFoods} setCurrentFoods={setCurrentFoods}/>
        </div>
      </section>
      
    </main>
  );
}

export default App;
