import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

function App() {
  const [foodNames, setFoodNames] = useState(foods);
  const [filteredFoodNames, setFilteredFoodNames] = useState(foods);

  const addFood = newFood => {
    setFoodNames([...foodNames, newFood])
  }

  const refreshFilteredFoodNames = searchText => {

    if (searchText === "")
    {
      setFilteredFoodNames(foodNames)
      console.log('from App FilteredFoodNames ', filteredFoodNames)
    }
    else
    {
      const filteredFoodNames = foodNames.filter(food => {
        return food.name.toUpperCase().includes(searchText.toUpperCase())
      })
      setFilteredFoodNames(filteredFoodNames)
      console.log('from App FilteredFoodNames ', filteredFoodNames)
    }
  }


  return (
    <div className="App">
      <SearchBar refreshFilteredFoodNames={refreshFilteredFoodNames}/>
      <AddFoodForm foodNames={foodNames} addFood={addFood}/>
      <FoodBox foodNames={filteredFoodNames} />
    </div>
  );
}

export default App;
