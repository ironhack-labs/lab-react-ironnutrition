import "./App.css";
import foodsJson from "./foods.json";
import {useState} from 'react';
import FoodBox from "./components/FoodBox";


function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = () => {
    const newList = foods.filter((elm) => {
      return elm.name !== food.name;
    })
    setFoods([...newList]);
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
      }} callBackFunction={() => {deleteFood(element.name)}}/>
      ) 
      })}

    </div>
  );
}

export default App;
