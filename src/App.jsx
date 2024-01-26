import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import { useState } from 'react'


function App() {

  function deleteFood(idParam){
    const filteredFoods = foodList.filter((oneFood) => {
      return oneFood.id !== idParam
    })

    setFoodList(filteredFoods)
  }



  const [foodList, setFoodList] = useState(foodsJson)

  return (
    <div className="App">
      {foodList.map(food => {
        return <FoodBox food={food} deleteFood={deleteFood} key={food.id}/>;
      })}
    </div>
  );
}

export default App;