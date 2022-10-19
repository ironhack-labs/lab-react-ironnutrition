import './App.css';
import { Row, Divider, Button } from 'antd';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { useState } from 'react';

function App() {

  const [foodList, setFoodList] = useState(foods);

  return (
    <div className="App">

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {foods.map((food) => (
          <FoodBox food={food} />
        ))}
      </Row>
    </div>
  );
}

export default App;
