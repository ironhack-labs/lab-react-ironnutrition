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

  return <div className="App">
    <AddFoodForm addNewFoodItem={addNewFoodItem} />
    <Button> Hide Form / Add New Food </Button>
    <Divider>Food List</Divider>
    <SearchBar {...{ searchString, searchStringChange }}/>
    <FoodList foods={foods.filter((food) =>
          food.name.toLowerCase().includes(searchString.trim().toLowerCase())
        )} />
  </div>;
}
export default App;
