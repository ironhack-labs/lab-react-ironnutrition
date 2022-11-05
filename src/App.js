import './App.css';
import foods from './foods.json';
import { useState } from "react";
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';

function App() {
  // const [foods, setFoods] = useState(" ")
  return <div className="App">
    <Button> Hide Form / Add New Food </Button>
    <Divider>Food List</Divider>
    <Row style={{ width: '100%', justifyContent: 'center' }}>
    {foods.map((food) => (
          <FoodBox food={food} key={food.id} />
        ))}
       </Row>
  </div>;
}
export default App;
