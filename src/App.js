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
            <FoodBox food={{
              name: food.name,
              calories: food.calories,
              image: food.image,
              servings: food.servings
            }} foods={foods} />
          </div>
        ))}
      </div>

{/* 
<p> {food.name} </p>
<img src={food.image} width={0} alt="food" /> 
*/}

    </div>
  );
}

export default App;
