import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { Card, Col, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import { convertLegacyProps } from 'antd/lib/button/button';
import Search from './components/Search';

function App() {
  const [list, setList] = useState(foods);
  const [saveList, setSaveList] = useState(foods);

  const addFood = (food) => {
    const copy = [...list]
    copy.push(food)
    setList(copy)
    setSaveList(copy)
  }

  const searchFood = (foodToSearch) => {
    const filteredFoods = saveList.filter((eachFood) => {
      return eachFood.name.startsWith(foodToSearch);
    })
    setList(filteredFoods)
  }

  return (
    <div className="App">
      <h1>Food List</h1>
      <AddFoodForm addFood = {addFood}/>
      <Search searchFood = {searchFood}/>
      {list.map((food, index) => {
        return (
          <FoodBox
            food={{
              name: food.name,
              calories: food.calories,
              image: food.image,
              servings: food.servings,
            }}
          />
        );
      })}
    </div>
  );
}



export default App;
