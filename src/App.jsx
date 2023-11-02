import "./App.css";
import foodsJson from "./foods.json";
import {useState} from 'react';
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const addNewFood = (newFood) => {
    const updatedFood = [...foods, newFood];

    setFoods(updatedFood);
  }

  const deleteFoods = (foodsId) => {
    const foodsCopy = [...foods];
    foods.forEach((food, index) => {
      if(food.id == foodsId) {
        foodsCopy.splice(index,1);
      }
    })
    setFoods(foodsCopy);
  }

  
  return (
    <div className="App">
      {foods.map((food) => {
        return(
          <FoodBox 
            key={food.id}
            food={food}
            clickToDelete={deleteFoods}
          />

        )
      })}
      <AddFoodForm addNewFood={addNewFood}/>
    </div>
  );
}

export default App;
