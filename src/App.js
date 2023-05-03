import './App.css';
import { Row, Divider, Button } from 'antd';
import { useState } from "react"
import foodsDataJSON from "./foods.json";
import FoodBox from './components/Foodbox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [ foods, setFoods ] = useState(foodsDataJSON)

  const addNewFood = newFood => {
    const updatedFoods = [newFood, ...foods]

    setFoods(updatedFoods)
  }

  return (
      <div className="App">
      { <AddFoodForm addFood={addNewFood} /> }

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {foods.map(food =>
      <FoodBox key={food._id} food={food} />
        )}
      </Row>
    </div>
  );
}

export default App;
