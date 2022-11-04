import { Row } from 'antd';
import { useState } from 'react';
import './App.css';
import { AddFoodForm } from './components/AddFoodForm';
import { FoodBox } from './components/FoodBox';
import foods from './foods.json';

function App() {
  const [foodsList, setFoods] = useState(foods);

  const addFoodItem = (newFoodItem) => {
    setFoods((old) => {
      return [...old, newFoodItem];
    });
  };

  return (
    <div className="App">
      <AddFoodForm {...{ addFoodItem }} />
      <h1>Food List</h1>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodsList.map((food) => (
          <FoodBox
            foodList={{
              name: food.name,
              calories: food.calories,
              image: food.image,
              servings: food.servings,
            }}
          />
        ))}
      </Row>
    </div>
  );
}

export default App;
