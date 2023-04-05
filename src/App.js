import './App.css';
import { useState } from "react";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/Search';


function App() {

  const [foodArr, setFoodArr] = useState(foods);
  const [searchFood, setSearchFood] = useState('');

  const addFood = (newFood) => {
    setFoodArr( (prevFoodArr) => {
      const newList = [newFood, ...prevFoodArr];
      return newList;
    });
  };
  
  const foodSearch = (event) => {
    setSearchFood(event.target.value);
  };

  const filteredFoodItems = foodArr.filter((food) =>
    food.name.toLowerCase().includes(searchFood.toLowerCase())
  );

  const deleteFood = (name) => {
    const newFoodList = foodArr.filter( food => food.name !== name);
    setFoodArr(newFoodList);
  };
 
  return (
    <div className="App">
      <Divider>Food List</Divider>
      <AddFoodForm addFood={addFood}/>
      <SearchBar searchFood={searchFood} foodSearch={foodSearch} />
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filteredFoodItems.map((food) => <FoodBox key={food.name} food={food} callBackToDelete={deleteFood} />)}
      </Row>
      
    </div>
  );
}

export default App;
