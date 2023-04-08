import './App.css';
import { useState } from 'react';
import food from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

import { Row, Divider, Button } from 'antd';

function App() {

  const [foods, setFoods] = useState(food);
  return (
    <div className="App">
      <AddFoodForm foods={foods} setFoods={setFoods}/>

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{width: '100%', justifyContent: "center" }}>
        {foods.map(food => {
          return (
            <FoodBox food={food}/>
          )
        })}
      </Row>
    </div>
  );
}

export default App;
