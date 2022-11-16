import './App.css';
import { Row, Divider, Button } from 'antd';
import React, { useState } from 'react'
import foods from './foods.json';
import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';
import SearchBar from './Components/SearchBar';


function App() {
  const [itens, setItens] = useState(foods);
  const [showFood, setShowFood] = useState(foods);

const deleteFood = (name) => {
  const filtItens = itens.filter((banana) => banana.name !== name);
  setItens(filtItens);
  setShowFood(filtItens);
};

const createFood = (banana) => {
  const newFood = [banana, ...itens]
  setItens(newFood);
}

const filteredItens = (searchQuery) => {
  let filtItens = itens.filter((banana) => 
   banana.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  setItens(filtItens); 
}

return (
  <div className='App'>
  <SearchBar filteredItens={filteredItens}/>
  <Divider>Food List</Divider>
  { itens.map ((allFoods) => {  
    return <FoodBox food={{
        name: allFoods.name,
        calories: allFoods.calories,
        image: allFoods.image, 
        servings: allFoods.servings
      }}
        deleteFood = {deleteFood}
       />
    })}
    <AddFoodForm createFood={createFood} />
  </div>
 );  
}

export default App;

