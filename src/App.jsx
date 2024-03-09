import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from './components/FoodBox';
import AddFoodForm from "./components/AddFoodForm";
import FoodList from "./components/FoodList";
import { useState } from "react";

function App() {
  const [foods, setAllFoods] = useState(foodsJson);
  
  //return (
    //<div className="App">
      /*{foods.map((foodItem) => (
        <FoodBox key={foodItem.name} food={foodItem} />
      ))}
   // </div>
  //);
}*/
  const deleteFood = (foodItem) => {
    const updatedFood = foods.filter((food) =>  food.id!= foodItem);
    setAllFoods(updatedFood);
  }
  /*const AddFoodForm = (foodItem) => {
    const updatedFood = foods.filter((food) =>  food.id!= foodItem);
    setAllFoods(updatedFood);
  }*/
  function handleAddFood(newFood) {
    setAllFoods([...foods, newFood]);
  }
  
  

  return (
    <div className="App">
    <FoodList food={foods} 
   callbackToDelete={deleteFood}
   handleAddFood={handleAddFood} />
    <AddFoodForm onAddFood={handleAddFood} />
    {foods.map((food) => (
        
      
    <FoodBox key={food.id}
          food={food}
          deleteFood={() => deleteFood(food.id)}
          on
        />
      ))}
      
    </div>
  );

}

export default App;
