import { Card, Row, Col, Divider, Input, Button } from "antd";
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';
import SearchForm from './components/SearchForm';



function App() {
  const [listFoods, setListFoods] = useState(foods);
  const [query, setQuery] =useState("")

  const deleteFood = (foodName) =>{
  const newFoodList = listFoods.filter((
    food)=> food.name !== foodName);
    setListFoods(newFoodList);
}

  const addFood = (newFood) => {
    setListFoods(prevFood => [newFood, ...prevFood])
 };
  

 const filteredFoods = listFoods.filter((food) =>
 food.name.toLowerCase().includes(query.toLowerCase()
 )
 );
  
 


 return (
  <div className="App">
    <h1>Food List</h1>
    <br />
    <SearchForm setQuery={setQuery} />

    <AddFoodForm addFood={addFood} />

    

    <Row>
      {filteredFoods.map((foodObj) => {
        return (
          <FoodBox
            key={foodObj.name}
            food={{
              name: foodObj.name,
              calories: foodObj.calories,
              image: foodObj.image,
              servings: foodObj.servings,
              deleteFood: (foodName) => {
      deleteFood(foodName);
    },
  }}
/>
        );
      })}
    </Row>
  </div>
);
};

export default App;
