import './App.css';
import foods from './foods.json';
import { useState } from "react";
import Foodbox from './components/Foodbox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodsArr, setFoodsArr] = useState(foods);
  const copy = [...foods];

  const deleteFood = (foodName) => {
    setFoodsArr((prevFoods) => {
      const newList = prevFoods.filter(element => {
        return element.name !== foodName;
      })
      return newList;
    })
  }

  return (
    <div>
      <AddFoodForm food={foodsArr} updateFood={setFoodsArr} />
      <Search updateFood={setFoodsArr} copy={copy} />

      {foodsArr.map((food) => {
        return (
          <div key={food.name}>
            <Foodbox food={food} delete={deleteFood} />
          </div>
        )
      })}

    </div>
  )
}
export default App;