import './App.css';
import foodsFromJson from './foods.json';
import { useState } from "react";
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';
import { Divider, Button } from 'antd';
import FoodList from './components/FoodList';

function App() {
  const [foods, setFoods] = useState(foodsFromJson)
  const [searchString, setSearchString] = useState('');

  const addNewFoodItem = (newFoodItem) => {
    setFoods(oldFoods => [...oldFoods, newFoodItem]);
  }

  const searchStringChange = (event) => {
    setSearchString(event.target.value);
  };

  const deleteFood = foodName => {
    const filteredFoods = [...foods].filter(food => {
        return food.name !== foodName;
    });
    setFoods(filteredFoods);
  };


  return <div className="App">
    <Divider>Add food entry</Divider>
    <AddFoodForm addNewFoodItem={addNewFoodItem} />
    <Button> Hide Form / Add New Food </Button>
    <Divider>Search</Divider>
    <SearchBar {...{ searchString, searchStringChange }}/>
    <Divider>Food List</Divider>
    <FoodList foods={foods.filter((food) =>
          food.name.toLowerCase().includes(searchString.trim().toLowerCase())
        )} onRemove={deleteFood} />
  </div>;
}
export default App;
