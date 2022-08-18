import './App.css';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm/AddFoodForm';
import Search from './components/Search/Search';

function App() {
  

  const [foods, setFoods] = useState(foodsData);

  const [displayFoods, setDisplayFoods] = useState(foodsData);

  const searchResults = (searchStr) => {
    let searchedFoods = foods.filter((food) =>{
      return food.name.toLowerCase().includes(searchStr.toLowerCase())
    });
    setDisplayFoods(searchedFoods);
    console.log(displayFoods);
  };


  const createFood = (food) => {
    const updatedFoods = [food, ...foods];
    setFoods(updatedFoods);
    setDisplayFoods(updatedFoods);
  }

  const deleteFood = (foodId) => {
    let searchedFoods = foods.filter((food) => food._id !== foodId);
    setFoods(searchedFoods);
    setDisplayFoods(searchedFoods);
  };

  return (
    <div className="App">
      <AddFoodForm createFood={createFood} />
      <h3>Food List</h3>
      <hr />
      <Search searchResults={searchResults}/>
    {foods.map((el) => {
      return <div>
          <FoodBox deleteFood={deleteFood} food={el} />
        </div>
      })}
      </div>
  );
}

export default App;
