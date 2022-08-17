import './App.css';
import FoodList from './components/FoodList/FoodList';
import foodsData from './foods.json';
import AddFoodForm from './components/AddFoodForm/AddFoodForm';

import {useState} from 'react';
import Searchbar from './components/Searchbar/Searchbar';

function App() {
  const [foods, setFoods] = useState(foodsData);
    //We create this display movies just so we don't mutate our original source of data
  const [displayFoods, setDisplayFoods] = useState(foodsData);

 

  const createFood = (food) => {
      const updatedFoods = [food, ...foods];
      setFoods(updatedFoods);
      //Here we need to also update the display array otherwise the changes will not show up on the screen, even though they are happening
      setDisplayFoods(updatedFoods);
    };

    const searchResults = (searchStr) => {
      let filteredFoods = foods.filter((food) =>  
        food.name.toLowerCase().includes(searchStr.toLowerCase())
      );
      //This will make displayMovies only contain the movies filtered out by the query. The original movies state will stay untouched
      setDisplayFoods(filteredFoods);
      console.log(displayFoods);
    };

  const deleteFood = (foodName) => {
    let filteredFoods = foods.filter((food) => food.name !== foodName);
    setFoods(filteredFoods);
    //Here we need to also update the display array otherwise the changes will not show up on the screen, even though they are happening
    setDisplayFoods(filteredFoods);
  };


  return (
    <div className="App">

    <AddFoodForm createFood={createFood} />

    <Searchbar searchResults={searchResults} />

    <FoodList foods={displayFoods} deleteFood={deleteFood} />  

    
    </div>
  )
}

export default App;
