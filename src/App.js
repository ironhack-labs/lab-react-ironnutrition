import { useState } from 'react';
import './App.css';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

function App() {
  const [foods, setAllFoods] = useState(foodsData);
  const [foodMaster,setFoodMaster] = useState(foodsData)
  
  function addNewFood(newFood){
    const updatedFood = [...foods,newFood]
    setAllFoods(updatedFood)
    setFoodMaster(updatedFood)
  }

  const searchFood = (str) => {
    let searchedFood

    if(str === '' ){
      searchedFood = foodMaster
    } else {
      searchedFood = foodMaster.filter((food) =>{
        return food.name.toLowerCase() === str.toLowerCase() 
      })
    }

    setAllFoods(searchedFood)
  }

  function deleteFood(foodName){
    const filteredFoods = foods.filter(
      (oneFood) =>  oneFood.name !== foodName 
    )
    setAllFoods(filteredFoods)
  }

  return (
    <div className="App">
    <SearchBar searchFood={searchFood}/>
    <AddFoodForm addNewFood={addNewFood}/> 
            <h1>Foodlist</h1>
            <div className='container'>
          {foods.map((oneFood) => {
        return (
          <div> 
          <FoodBox foods={oneFood} deleteFood={deleteFood}/>
          </div>
        );
      })}</div>

    </div>
  );
}

export default App;
