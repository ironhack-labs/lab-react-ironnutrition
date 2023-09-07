import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { Row } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import { useState } from 'react';

function App() {
  const [foodList, setFoodList] = useState(foods)


  function addNewFood(newFood) {
    const newFoodList = [...foodList, newFood]
    setFoodList(newFoodList)
  }
  
  return (
    <div className="App">
      <AddFoodForm addNewFood = {addNewFood}/>

      <h1>Food List</h1>
      <Row>
        {foodList.map((food) => {
          return <FoodBox food={food}></FoodBox>;
        })}
      </Row>
    </div>
  );
}

export default App;
