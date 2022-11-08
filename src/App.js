import './App.css';
import foodsFromJson from './foods.json';
import { useState } from "react";
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';
import { Divider, Button } from 'antd';
import FoodList from './components/FoodList';

function App() {
  const [foods, setFoods] = useState(foodsFromJson);
  const [searchString, setSearchString] = useState('');
  const [displayAddFoodForm, setDisplayAddFoodForm] = useState(true);

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

  const handleToggle = () => {
    return setDisplayAddFoodForm(!displayAddFoodForm);
  };

  return <div className="App">
    <Divider>Add food entry</Divider>
    <div className={displayAddFoodForm ? "hidden" : null}>
    <AddFoodForm addNewFoodItem={addNewFoodItem} />
    </div>
    <Button onClick={handleToggle}>{displayAddFoodForm ? "Add New Food": "Hide Form" }</Button>
    <Divider>Search</Divider>
    <SearchBar {...{ searchString, searchStringChange }}/>
    <Divider>Food List</Divider>
    <FoodList foods={foods.filter((food) =>
          food.name.toLowerCase().includes(searchString.trim().toLowerCase())
        )} onRemove={deleteFood} />
  </div>;
}
export default App;
