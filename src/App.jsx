import { useState } from "react";
import "./App.css";
/* import foodsJson from './foods.json'
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm"; */
import FoodList from "./components/FoodList";

function App() {

  return (
    <div className="App">
      <FoodList/>
    </div>
  )

  /* const [foods, setFoods] = useState(foodsJson)

  const deleteFood = foodId => {
    // returns every food that does NOT have this movieId
    const filteredFoods= foods.filter(food => foodId !== food.id);

    setFoods(filteredFoods);
  };

  const addNewFood = newFood =>{
    const increasedFoodList = [newFood, ...foods]
    setFoods(increasedFoodList)
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <div>
      <AddFoodForm addFoodHandler={addNewFood}/>

      </div>

      <div>
        {foods.map(food => {
          return (
            <FoodBox 
              key= {food.id}
              id={food.id}
              name={food.name}
              calories={food.calories}
              image={food.image}
              nrServings={food.servings}
              dltBttn={deleteFood}
            />
            )}) 
        }
      </div>
   
    </div>
  ); */
}

export default App;

/* 
name= {name}
              calories= {calories}
              image= {image}
              nrServings= {servings}  */