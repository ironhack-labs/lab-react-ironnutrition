import React from 'react'
import foodsJson from './foods.json';
import "./App.css";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foodList, setFoodList] = React.useState(foodsJson)
  
  function addFood (foodToAddObj) {
    const updatedFoods = [...foodList, foodToAddObj]
    setFoodList(updatedFoods)
  }
  function deleteFood(foodToDeleteId) {
    const updatedFoods = foodList.filter((foodListItem) => foodListItem.id !== foodToDeleteId);
    setFoodList(updatedFoods)
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addFood={addFood}/>

      {foodList.map((eachDataPoint) => {
        return <FoodBox key={eachDataPoint.id} food={eachDataPoint} onDelete={() => deleteFood(eachDataPoint.id)} />
      })}
    </div>
  );
}

export default App;
