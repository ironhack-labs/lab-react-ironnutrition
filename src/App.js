import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import './App.css';
import { useState } from "react";

function App() {

  const [foodsArr, setFoodsArr] = useState([...foods]);

  const addNewFood = (newFoodObj) => {

    setFoodsArr((prevFoodsArr) =>
      [newFoodObj, ...prevFoodsArr]
    );

  };

  return (
    <div className="App">
      <h1>Food List</h1>
      <AddFoodForm addNewFood={addNewFood}/>
      <div className="food-container">
        {foodsArr.map(food => {

          return(
            <FoodBox food={ food } />
          );

        })}
      </div>

    </div>
  );
}

export default App;
