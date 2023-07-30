import { useState } from 'react';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';
import './App.css';

function App() {

  const [foods, setFoods ] = useState(foodsData);
  return (
    <div className="App">
      {/* Display Add Food component here */}

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
