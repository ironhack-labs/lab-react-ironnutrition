import logo from './logo.svg';
import './App.css';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import AddFoodForm from './components/AddFoodForm/AddFoodForm';
import React, { useState } from "react";
import Search from './components/Search/Search';



function App() {

  const [foods, setFoods] = useState(foodsData);
  const [displayFoods, setDisplayFoods] = useState(foodsData);

  const createFood = (food) => {
    const updatedFoods = [food, ...foodsData];
    setFoods(updatedFoods);
    setDisplayFoods(updatedFoods);
  };

  /* const searchResults = (queryString) => {
    let filteredFoods = foods.filter((food) => {
        return food.name.toLowerCase().includes(queryString.toLowerCase())
      }
    );
    
    setDisplayFoods(filteredFoods);
    setFoods(filteredFoods);
    console.log(filteredFoods);
  }; */
  const searchFoodList = (queryString) => {
        let searchedFoods = foods.filter((food) => {
            return food.name.toLowerCase().includes(queryString.toLowerCase());
        })

        setDisplayFoods(searchedFoods);
       
    }

    const deleteFood = (foodName) => {
      let filteredFood = foods.filter((food) => food.name !== foodName);
      setFoods(filteredFood);
     
      setDisplayFoods(filteredFood);
    };
  
  
  return (
    <div className="App">

<div className='food-form'>
  <Search results={searchFoodList} />
</div>

<div>
  <AddFoodForm createFood={createFood}/>
</div>



<div className='food-list'> 
{displayFoods.map((food, index) => {
 console.log(displayFoods)
return <FoodBox  key={index} food = {food} clickToDelete={deleteFood}/>
})}

</div>


    </div>
  );
}

export default App;
