
import './App.css';
import foodData from "./foods.json";
import Foodlist from './components/Foodlist/Foodlist';
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm/AddFoodForm';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [food, setFood] = useState(foodData);
  const [displayFood, setDisplayFood] = useState(foodData);


  const createNewFoodCard = (newFoodCard) => {
    const updateFoodCards = [...food, newFoodCard];
    setFood(updateFoodCards);
    setDisplayFood(updateFoodCards);
  }

  //Followed along with the classnotes but my search bar doesn't filter and i can't figure out why
  const searchResults = (searchStr) => {
    let filteredFoods = food.filter((food) =>
      food.name.toLowerCase().includes(searchStr.toLowerCase())
    );
    setDisplayFood(filteredFoods);
    console.log(displayFood);
  };

  return (
    <div className="App">

      <AddFoodForm addedFood={createNewFoodCard} />
      <SearchBar searchResults={searchResults} />
      <Foodlist food={food} />



    </div>
  );
}

export default App;
