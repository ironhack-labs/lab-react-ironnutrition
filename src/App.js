import './App.css';
import foodsData from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import {useState} from 'react'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFooodForm';


function App() {
  const [foods, setFood] = useState(foodsData)


  const handleDelete = (name) => {
    const newFoods = foods.filter(food => food.name !== name)
    setFood(newFoods)
  }

  return (
    <div className="App">

      <div>
        <AddFoodForm foods={foods} />
      </div>

      <div>
        <h1>Food List</h1>
        {foods.map((food, index) => (
          <div key={index} >
            <FoodBox 
              food={{name: food.name, calories: food.calories, image: food.image, servings: food.servings}} 
              foods={foods} 
              handleDelete = {handleDelete}
          />
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
