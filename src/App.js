import React, { useState } from 'react';
import foods from './foods.json';
import FoodBox from  './FoodBox.jsx'
import AddFood from './AddFood';
import Searchbar from './Searchbar.jsx'
import 'bulma/css/bulma.css';
import TodayFood from './TodayFood';

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

  const increaseQuantity = (name) => {
    setCurrentFoods(foods => {
      const increase = foods.foodList.map(food => {
        const match = food.name === name
        const increase =  match ? (food.quantity + 1) : food.quantity
        return {...food, quantity: increase}
      })
      return {...foods, foodList: increase}
  })
}

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
      value={food.quantity}
      display={match}
      increaseQuantity={increaseQuantity}
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
          <TodayFood list={currentFoods.foodList}/>
        </div>
      </section>
      
    </main>
  );
}

export default App;
