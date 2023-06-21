import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foodToDisplay, setFoodToDisplay] = useState(foods);

  const addFood = (newFood) => {
    const newList = [newFood, ...foodToDisplay];
    setFoodToDisplay(newList);
  };

  return (
    <div className="App">
      <AddFoodForm callbackToCreate={addFood} />

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        <FoodBox listOfFood={foodToDisplay} />
      </Row>
    </div>
  );
}

export default App;
