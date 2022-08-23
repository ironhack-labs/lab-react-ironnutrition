import './App.css';
import { useState } from 'react';
import foodsData from './foods.json';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [food, setFood] = useState(foodsData);

  const addNewFood = (newFood) => {
    const updatedFoods = [newFood, ...food];

    setFood(updatedFoods);
  };


  return (
    <div className="App">
      <AddFoodForm addNewFood={addNewFood}/>
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
      <div className="food-list">
        {food.map((eachfood) => {
          return <FoodBox key={eachfood.name} food={eachfood} />;
        })}
      </div>
      </Row>
    </div>
  );
}

export default App;
