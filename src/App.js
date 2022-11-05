import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { useState } from 'react';


function App() {
  const [allFood, setFoods] = useState(foods)
  const [foodsData, setFoodsData] = useState(foods)
  console.log({ALLFOOD: allFood}) 

const addNewFood = (newFood) => {
  //BRACKETS HAVE TO MATCH THE STATES ABOE OUR YOU CAN ONLY ADD 1 NEW FOOD EVER
  const updatedFoods = [...allFood, newFood];
  const updateFoodData = [...foodsData, newFood]
  setFoods(updatedFoods);
  setFoodsData(updateFoodData);

}

  return (
    <div className="App">

<div className="addFoodField">
<AddFoodForm addFood={addNewFood} />
</div>


<div className="foodBox">
{allFood.map((food) => {

console.log({QUICKTES:food.image})
return <div >
  <FoodBox  food={{
    name: food.name,
    calories: food.calories,
    image: food.image,
    servings: food.servings
  }}/>
</div>
})}
</div>


 
    </div>
  );
}

export default App;
