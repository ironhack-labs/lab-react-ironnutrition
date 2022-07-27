import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm'

function App() {
  
  const [viewedFoods, setViewedFoods] = useState(foods)

  const addFoodEntry = (foodEntry) => {
    setViewedFoods((prevList) => {
      const newList = [...prevList];
      newList.push(foodEntry)
      return newList;
    })
  }
  
  return <div className="App">

  <AddFoodForm callbackToAddFoodEntry={addFoodEntry}/>

  {viewedFoods.map( (element, index) => {
    return(
      <FoodBox key={index}food={element} />
    )    
  })
  }

  </div>;
}
export default App;