import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import AddFoodForm from './components/AddFoodForm';
import { useState } from 'react';
import { Divider } from 'antd';
import Search from './components/Search';

function App() {

  const [foodList, setFoodList] = useState(foods);
  const [query, setQuery] = useState("");

  // Iteration 6
  const deleteFood = (foodName) => {
    setFoodList((prevFoods) => {
      const newList = prevFoods.filter((element) => {
        return element.name === foodName ? false : true;
      });
      return newList;
    });
  }

  const addFood = (newFood) => {
    setFoodList((prevFoods) => {
      return [newFood, ...prevFoods];
    });
  }


  return (
    <div className="App">

      <AddFoodForm callbackToAdd={addFood} />
      <Divider><h1>Food List</h1></Divider>

      <Search query={query} setQuery={setQuery} />

      {foodList.length === 0 && <h3>Opps! There is no more content to show.</h3>}
      {foodList.length !== 0 && foodList.filter(food => {
        return food.name.toLowerCase().includes(query.toLowerCase());
      }).map((food, index) => {
        return (
          <FoodBox key={index} {...food} callbackToDelete={deleteFood} />
        )
      })}

    </div>
  );
}

export default App;
