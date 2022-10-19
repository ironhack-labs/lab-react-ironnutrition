import './App.css';
import { Row, Divider, Button } from 'antd';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';

function App() {

  const [foodList, setFoodList] = useState(foods);
  
  const newFood = (foodDetails) => {
    setFoodList( (prevFoodList) => {
      const newList = [foodDetails, ...prevFoodList];
      return newList;
    });
  }

  return (
    <div className="App">
      <AddFoodForm callbackToCreate={newFood} />

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {foods.map((food) => (
          <FoodBox food={food} foods={foodList} />
        ))}
      </Row>
    </div>
  );
}

export default App;
