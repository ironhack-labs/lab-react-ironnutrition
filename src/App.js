import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [food, setFood] = useState(foods);

  return (
    <div className="App">
      <AddFoodForm />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
      <div className="food-list">
        {foods.map((eachfood, index) => {
          return <FoodBox key={index} food={eachfood} />;
        })}
      </div>
      </Row>
    </div>
  );
}

export default App;
