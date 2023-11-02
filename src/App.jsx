import "./App.css";
import foodsJson from "./foods.json"
import FoodBox from "./components/FoodBox";
import { useState } from 'react';
import AddFoodForm from "./components/AddFoodForm";
function App() {

  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (id) => {
    setFoods(currentFoods => currentFoods.filter(food => food.id !== id));
  };

  const addNewFood = (newFood) => {
    setFoods([...foods, newFood]);
};
  

  
  return (
    <div className="App">
      <AddFoodForm addNewFood={addNewFood} />
      {foods.map((food, index)=>{
          return(<FoodBox key={food.id} food ={food} deleteFood={deleteFood}/>)
        })}
      
    </div>
  );
}

export default App;
