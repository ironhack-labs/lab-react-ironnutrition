import './App.css';
import foodsDataJSON from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFoodForm';
import { useState } from "react";
import { Row } from 'antd';

function App() {
  const [foodData, setFoodData] = useState(foodsDataJSON);
  const [foods, setFood] = useState(foodsDataJSON);

  const addNewFood = (newFood) => {
    const updatedFoodData = [...foodData, newFood];
    const updatedFood = [...foods, newFood];

    setFoodData(updatedFoodData);
    setFood(updatedFood);
  };
  return(
    <div className="App">
      
    <AddFood addFood={addNewFood} />
    <Row style={{ width: '100%', justifyContent: 'center' }}>
{foods.map((food) => {
        return (
          
          <div>
            <FoodBox className='FoodBox' key={food.name} food={food} />
    </div>

        );
      })}
  </Row>
</div>)}
export default App;