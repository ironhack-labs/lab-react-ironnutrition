import "./App.css";
import foodsJson from "./foods.json";
import {useState} from 'react';
import FoodBox from "./components/FoodBox";


function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (foodName) => {
    const newList = foods.filter((element) => {
      return element.name !== foodName;
    })
    setFoods(newList);
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      {foods.map((element) => {
       return(
        <FoodBox key={element.id} element={{
        name: element.name,
        calories: element.calories,
        image: element.image,
        servings: element.servings
      }} callbackToDelete={deleteFood}/>
      ) 
      })};

    </div>
  );
}

export default App;
