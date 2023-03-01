import react, { useState } from 'react';

import foodsJSON from "./foods.json";
import './App.css';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm.jsx';
import Searchbar from './components/Searchbar';



function App() {
  const foodArr = [...foodsJSON]
  const [foodList, setFoodList] = useState(foodsJSON);
  const [showFood, setShowFood] = useState(foodsJSON)
  

  const addFood = (food) => {
    const foodListCopy = [...foodList, food];
    setFoodList(foodListCopy)
  };

  const searchFood = (query) => {
    const filteredFood = foodsJSON.filter((food)=> 
    foodsJSON.name.toLowerCase().includes(query.toLowerCase())
    );
    setShowFood(filteredFood)
  }

  const deleteFood = (foodName) => {
    const filteredFoodList = foodList.filter((food) => {
      return food.name !== foodName;
    })
    setFoodList(filteredFoodList)
    setShowFood(filteredFoodList)
  }


  return (
    <div className="App">
    {foodArr.map((food)=> {
      return (
        <div>


  <p> {food.name}</p>
  <img src={food.image} width={90} alt=""/>
</div>
      )
    })
    }
  
    {showFood.map((food) => {
        return <FoodBox food={food} deleteFood= {deleteFood}key={food.name} />;
      })}

 <AddFoodForm addFood={addFood} />

<Searchbar searchFood={searchFood} />
</div>

  );
}

export default App;
