import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import { useState } from "react";

function App() {
  const [foods, setFoods] = useState(foodsJson); //original
  const [foodsArr, setFoodsArr] = useState(foods); // filtered ARRAY

  // If you were to use only foodsArr and modify it directly for filtering or deleting,
  // you would lose the reference to the original data,
  // making it more challenging to reset or manage the data effectively.

  const deleteFood = (id) => {
    const filteredFoods = foods.filter((food) => {
      return food.id !== id;
    });

    const filteredFoodArr = foodsArr.filter((food) => {
      return food.id !== id;
    });

    setFoodsArr(filteredFoodArr);
    setFoods(filteredFoods);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      {foodsArr.map((food) => {
        return (
          <>
            <FoodBox
              key={food.id}
              food={food} // const{food}=props (in FoodBox jsx)
              deleteFood={deleteFood}

              //IF you WANT...
              // name={food.name}
              // calories={food.calories}
              // servings={food.servings}
              //then, you need destructure the props in FoodBox jsx like this:
              // const { name, calories, servings } = props;
            />
          </>
        );
      })}
    </div>
  );
}

export default App;
