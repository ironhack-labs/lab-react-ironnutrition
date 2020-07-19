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
  const [currentSearch, setCurrentSearch] = useState('')

  const renderFoods = currentFoods.foodList.map(food => {
    /* 
      "isSearching" evalua si estamos buscando algo
      "match" evalua: si estamos buscando y si coincide con el nombre de la comida. Si no coincide, añade display: none.
    */
    const isSearching =  currentSearch ? true : false
    const match = !isSearching ? null : food.name.toLowerCase().includes(currentSearch) ? "" : "none"
    
    return (
      <FoodBox 
      name={food.name}
      image={food.image}
      calories={food.calories}
      key={food.name}
      display={match}
    />
    )
  })

  return (
    <main >
      <Searchbar currentSearch={currentSearch} setCurrentSearch={setCurrentSearch}/>
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
