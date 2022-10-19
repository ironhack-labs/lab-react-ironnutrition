import { useState } from "react";
import './App.css';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Row, Divider, Button } from 'antd';
import foods from './foods.json';

function App() {
  const [foodList, setFoodList] = useState(foods);

  const createFood = (foodDetails) => {
    setFoodList( prevFoodList => {
      const newList = [foodDetails, ...prevFoodList];
      return newList;
    });

  }

  return (
    <div className="App">
      {/* Display Add Food component here */}
      <AddFoodForm callbackToCreate={createFood} />

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
