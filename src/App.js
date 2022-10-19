import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/Foodbox';
import foods from './foods.json';
import Search from './components/Search';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function App() {
  const [food, setFood] = useState(foods);
  const [displayForm, setDisplayForm] = useState(false)


  const addNewFood = (newFood) => {
    setFood((prevFoodList) => {
      const newFoodList = [newFood, ...prevFoodList];
      return newFoodList;
    });
  };

  const deleteFood = (foodName) => {
    const foodList = food.filter((element) => {
      return element.name !== foodName;
    });
    setFood(foodList);
  };

  const searchFood = (searchedFood) => {
    setFood(() => {
      return searchedFood !== ''
        ? foods.filter((food) =>
            food.name.toLowerCase().startsWith(searchedFood.toLowerCase())
          )
        : foods;
    });
  };


  const shiftForm = () => {setDisplayForm((currentState) => !currentState);}

  return (
    <div className="App">
      <button onClick={shiftForm} >{displayForm ? "Hide the Form" : "Add a New Food"}</button>
      {displayForm &&
        <AddFoodForm callbackToAdd={addNewFood} />
      }
      <Search callbackToSearch={searchFood} />

      <div className="foodsList">
        {food.map((element, index) => {
          return (
            <div key={index}>
              <FoodBox foodBox={element} callbackToDelete={deleteFood} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
