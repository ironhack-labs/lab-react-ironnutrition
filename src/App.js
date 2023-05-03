import './App.css';
import foods from "./foods.json";
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm'

function App () {
  const [foodList, setFoodList] = useState(foods);
  console.log(foodList)

//creating a function that will pass the new food items in the array of food
//and we pass the newFood, that we created in the AddFoodForm as an argument
  const addNewFood = (newFood) => {

    //the new updated list is now the copy of the old list + the added element
    const updatedFoodList = [...foodList, newFood]

    setFoodList (updatedFoodList);
  }

  return <div className="App">

<AddFoodForm addFood={addNewFood}
  //here we pass the addNewFood function and naming it the addFood
  //so everytime we clicking the "submit form" button to add the new food the addFood which equals to addNewFood is rendering
/>

  <div>
  {foodList.map((food) => (
          <FoodBox key={food.id} food={food}>
          <p>{food.name}</p>
          <p>{food.calories}</p>
          <img image={food.image} alt={food.name} width={100} />
          <p>{food.servings}</p>
        </FoodBox> 
     ))}
  </div>

  </div>;
}
export default App;
