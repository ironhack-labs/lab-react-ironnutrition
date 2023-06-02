import './App.css';
import { useState } from 'react';
import { Row, Divider } from 'antd';
import foodsJSON from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodsJSON);
  return (
    <div>
      <AddFoodForm foods={foods} setFoods={setFoods} />
      <Divider>Food List</Divider>
      <h1>Food List</h1>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map((food) => {
          return (
            <FoodBox
              food={{
                name: food.name,
                calories: food.calories,
                image: food.image,
                servings: food.servings,
              }}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
