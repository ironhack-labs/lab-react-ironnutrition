import './App.css';
import foodData from './foods.json';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import FoodList from './components/FoodList/FoodList';
import AddFood from './components/AddFood/AddFood';

function App() {
  //const [foodData] = useState(foods);

  const [foods, setFoods] = useState(foodData);

  const foodProps = (food) => {
    const updateFood = [food, ...foods];
    setFoods(updateFood);
  };

  return (
    <div className="App">
      {/* Display Add Food component here */}
      <AddFood createFood={foodProps} />

      {/* Display Search component here */}
      <Divider>Food List</Divider>

      {/* Render the list of Food Box components here */}
      <Row
        style={{
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <FoodList foodDataProps={foodData} />
      </Row>
    </div>
  );
}

export default App;
