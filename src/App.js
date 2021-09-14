import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import Form from './components/Form/Form';
import SearchBar from './components/SearchBar/SearchBar';
import TodaysItem from './components/TodaysItem/TodaysItem';

const App = () => {
  const [foodList, setFoodList] = useState(foods);
  const [showForm, setShowForm] = useState(false);
  const [itemList, setItems] = useState([]);
  const [totalCal, setCal] = useState(0);
  
  useEffect(() => {
    sumAllCalories();
  }, [itemList]);
  
  const showHideForm = () => {
    setShowForm(!showForm);
  };

  const filterFoods = (input) => {
    setFoodList(
      [...foods].filter((element) => {
        return element.name.toLowerCase().includes(input.toLowerCase());
      })
    );
  };

  const addToday = ( quantity, name, calories ) => {
    const newItem = {
      quantity: quantity,
      name: name,
      calories: calories
    };
    setItems([...itemList, newItem]);    
  }
  
  const sumAllCalories = () => {
    setCal(itemList.reduce((acc, present) => {
      return acc + present.calories;      
    }, 0))    
  }
  
  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <div className="nav">
        <div>
          <button onClick={showHideForm}>Add New Foods</button>
          {showForm ? (
            <Form
              foodList={foodList}
              setFoodList={setFoodList}
              showHideForm={showHideForm}
            />
          ) : (
            ''
          )}
        </div>
        <div>
          <SearchBar filterFoods={filterFoods} />
        </div>
      </div>
      <div className="lists">
        <div className="boxes">
          {foodList.map((element) => {
            return (
              <FoodBox
                name={element.name}
                calories={element.calories}
                image={element.image}
                key={element.name}
                addToday={addToday}                
              />
            );
          })}
        </div>
        <div className="today">
          <h2>Today's Foods</h2>
          <ul>
          {itemList.map((element) => {
            return (
              <TodaysItem 
                quantity={element.quantity}
                name={element.name}
                calories={element.calories}
              />
            );
          })}            
          </ul>
          <p className="total">Total: {totalCal} cal</p>
        </div>
      </div>
    </div>
  );
};

export default App;
