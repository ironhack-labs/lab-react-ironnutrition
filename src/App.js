import './App.css';
import foods from "./foods.json"
import { useState } from 'react'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [items, setItems] = useState(foods)

  function addFood(food) {

   return setItems([food, ...items])
  }

  function handleSearch(e) {

    const foodsCopy = [...foods]

    const filterBySearch = foodsCopy.filter(food => {
      if (food.name.toLowerCase().includes(e)) {
         return food; 
        }
    });

    setItems(filterBySearch)

  }
  function deleteFood(foodName) {


    const filteredFoods = items.filter(food => food.name !== foodName); 

    setItems(filteredFoods); 
  }
  
  return (
     <div className="App">
      <Search handleSearch={handleSearch}/>
      <AddFoodForm addFood={addFood} />
      {items.map(item => {
        return <FoodBox food={ item } deleteFood={deleteFood} />
      })}
    </div>
  );
}

export default App;
