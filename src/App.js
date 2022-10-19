import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/Foodbox';
import foods from './foods.json';


function App() {
  const [food, setFood] = useState(foods)

  const addNewFood = (newFood) => {
    setFood((prevFoodList) => {
      const newFoodList = [newFood, ...prevFoodList]
      return newFoodList
    })

  }

  const deleteFood = (foodName) => {
    const foodList = food.filter((element)=>{
      return element.name !== foodName;
    })
    setFood(foodList)
  }

  return (
    <div className="App">
      <AddFoodForm callbackToAdd={addNewFood} />
      {food.map((element, index) => {
        return (

          <div key={index}>

            <FoodBox foodBox={element} callbackToDelete={deleteFood}/>
          </div>
        )
      })
      } </div>
  );
}

export default App;
