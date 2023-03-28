import { useState } from "react";
import foods from "./foods.json";
import { Row, Divider, Button } from 'antd';
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foodList, setFoodList] = useState(foods);
  console.log(foods);

  const addFood = (newFood) => {
    setFoodList(prev => [newFood, ...prev])
  };

  return (
    <div className="App">
      <Divider>Add Food Entry</Divider>
      <AddFoodForm addFood={addFood} />

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodList.map((food) => <FoodBox key={food.name} food={food} />)}
      </Row>
    </div>
  );
}

export default App;
