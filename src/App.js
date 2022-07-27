import './App.css';
import foodsData from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import {useState} from 'react'
import FoodBox from './components/FoodBox';


function App() {

  const [foods, setFood] = useState(foodsData)

  return (
    <div className="App">

      <div>
        <h1>Food List</h1>
        {foods.map((food, index) => (
          <div key={index} >
            <p> {food.name} </p>
            <img src={food.image} width={0} alt="food" />
          </div>
        ))}
      </div>

      <FoodBox food={{
        name: 'Orange',
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      }} />

    </div>
  );
}

export default App;
