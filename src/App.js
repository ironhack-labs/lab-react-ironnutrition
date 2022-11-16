import './App.css';
import foods from './foods.json'
import FoodBox from "./FoodBox"
import { useState } from 'react';
import AddFoodForm from './AddFoodForm';
import Search from './Search'

function App() {
  const [items, setItems] = useState(foods)
  const [deletedFood, setDeletedFood] = useState(foods)

  const deadFood = (name) => {
    const suuperSearch = items.filter((bananas) => bananas.name !== name)
    setItems(suuperSearch);
    setDeletedFood(suuperSearch);
  }

  const newForm = (bananas) => {
    const newFood = [bananas, ...items]
    setItems(newFood)
  }

  const searchFood = (searchFoods) => {
    const suuperSearch = items.filter((bananas) =>
      bananas.name.toLowerCase().includes(searchFoods.toLowerCase()))
    setItems(suuperSearch)
  }

  

  return (


    <div className='App'>

      <Search searchFood={searchFood} />
      {items.map((bananas) => {
        return <FoodBox food={{
          name: bananas.name,
          calories: bananas.calories,
          image: bananas.image,
          servings: bananas.servings
        }} 
        deadFood = {deadFood}
        />
      })}
    

      <AddFoodForm newForm={newForm} />

    </div>
  );
}

export default App;