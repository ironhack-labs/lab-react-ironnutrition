/* eslint-disable no-unused-vars */
import foods from './foods.json'
import { useState } from 'react'
import { Row, Divider, Button, Col } from 'antd'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foodsData, setFoodsData] = useState(foods)

  const addNewFood = (newFood) => {
    const updatedFoods = [...foodsData, newFood]
    setFoodsData(updatedFoods)
  }

  return (
    <div className="App">
      <Divider>
        <h1>Food List</h1>
      </Divider>

      <AddFoodForm addFood={addNewFood} />

      <Row style={{ width: '100%' }} gutter={[16, 16]}>
        {foodsData.map((food, i) => {
          return <FoodBox food={food} key={food.name + i} />;
        })}
      </Row>
    </div>
  );
}

export default App;
