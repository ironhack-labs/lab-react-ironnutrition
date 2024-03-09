import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from './components/FoodBox';
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
  
  

  return (
    <div className="App">
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
