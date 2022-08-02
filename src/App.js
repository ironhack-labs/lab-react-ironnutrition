import { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
//import FoodCard from './components/FoodCard';
import foods from './foods.json';
import AddFoodItem from './components/AddFoodItem';
import Searchbar from './components/Searchbar';
import 'antd/dist/antd.css';

function App() {
  const [foodItem, setFoodItem] = useState(foods);
  const [searchFoods, setSearchFoods] = useState(foodItem);
  const [showFoods, setShowFoods] = useState(foodItem);
  console.log(foodItem);

  const toggleShow = () => {
    console.log(showFoods);
    setShowFoods(!showFoods);
  };

  const deleteFood = (foodName) => {
    const filteredFoods = foodItem.filter((food) => {
      return food.name !== foodName;
    });
    setFoodItem(filteredFoods);
    setSearchFoods(filteredFoods);
  };

  const FunctionAddFood = (food) => {
    const updatedFood = [...foodItem, food];
    setFoodItem(updatedFood);
  };
  const searchFilter = (search) => {
    let filteredFoods = foodItem.filter((food) =>
      food.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchFoods(filteredFoods);
  };

  return (
    <div className="App">
      <button onClick={toggleShow}>
        {showFoods ? 'Hide Form' : 'Add New Food'}
      </button>

      {showFoods && <AddFoodItem FunctionAddFood={FunctionAddFood} />}
      <Searchbar searchFilter={searchFilter} />
      <h1>Food List</h1>

      <div className="allFood">
      {searchFoods.map((element) => {
        return <FoodBox food={element} clickToDelete={deleteFood} />;
      
 })};
      </div>
    </div>
  );
}

export default App;