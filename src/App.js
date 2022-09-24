import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import React, {useState} from 'react';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';


function App() {
  const [food, setFood] = useState(foods)

  const foodEntry = (newFood) => {
    const arr = [...food, newFood]
    setFood(arr);
  }

  return (
    <div className="App">
      <AddFoodForm foodEntry={foodEntry}/>
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {
      
      food.map((oneFood, pos) => {
        return (
          <FoodBox 
          key={pos}
          food={{...oneFood}} 
          />
        )
      })
      
      }
      
      </Row>
    </div>
  );
}

export default App;
