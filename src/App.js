import { useState } from 'react';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button, Col } from 'antd';
import './App.css';
import AddFoodForm from './components/AddFoodForm';

function App() {

  const [foods, setFoods ] = useState(foodsData);

  const addFood = (newFood) => {
    setFoods(prevFoods => [newFood, ...prevFoods])
  }
  return (
    <div className="App">
      {/* Display Add Food component here */}
      <Row justify={'center'}>
        <Col span={6}>
        <AddFoodForm addFood={addFood}/>

        </Col>
        </Row>

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {
          foods.map((food, i) => (
            <FoodBox 
              key={i}
              {...food}
            />

          ))
        }
        
      </Row>
    </div>
  );
}

export default App;
