import { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setfoodList] = useState(foods);
  const [searchQuery, setSearchQuery] = useState("");

  // setfoodList(foodList);

  const createFood = (newFood) => {
    setfoodList((prevFoodList) => {
      const newList = [newFood, ...prevFoodList];
      return newList;
    });
  };

  const deleteFood = (foodName) => {
    const newListOfFood = foodList.filter((food) => {
      return food.name !== foodName;
    });
    setfoodList(newListOfFood);
  };

  const foodToDisplay = foodList.filter( (food) => {
    return food.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="App">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <AddFoodForm callbackToCreate={createFood} />
      {foodToDisplay.map((item, index) => {
        return <FoodBox item={item} callbackToDelete={deleteFood} />;
      })}
    </div>
  );
}

export default App;
