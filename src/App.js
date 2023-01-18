import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foodsFromJson, setFoods] = useState(foods);
  const foodsList = [...foodsFromJson];
  
  
  const [searchQuery, setSearchQuery] = useState('');
  // variable that filters array based on search
  const foodsToDisplay = foodsList.filter( (food) => {
    return food.name.toLowerCase().includes(searchQuery.toLowerCase());
  });
  
  const createFood = (newFoodObj) => {
    setFoods((prevListOfFoods) => {
      const newList = [newFoodObj, ...prevListOfFoods];
      return newList;
    });
  }

  const deleteFood = (foodName) => {
   
    const newListOfFoods = foodsList.filter((food) => {
      return food.name !== foodName;
    })

    //update state
    setFoods(newListOfFoods);
  }

  return (
    <div>
      <form>
            <label>Search by Name:
              <input 
                type="text" 
                name="searchQuery" 
                placeholder="search by name"
                value={searchQuery}
                onChange={(e)=> {setSearchQuery(e.target.value)}}
                />
            </label>
      </form>
          
      <div className="App">
        <AddFoodForm callbackToCreate ={createFood}/>
        {foodsToDisplay.map((foodList) => {
          return (
            
              <FoodBox 
                foodList={foodList} 
                callbackToDelete={deleteFood}/>
            
          );
        })}
      </div>
    </div>
    
  );
}

export default App;
