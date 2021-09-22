import './App.css';
import foodsData from "./foods.json";
import {useState} from 'react';
import FoodBox from './component/FoodBox'
import { Row } from 'antd';

function App() {

  const [foods, setFood] = useState(foodsData)
  
  return (
    <div className="App">
      <h2>Food List</h2>

      <Row>
      {foods.map(food => {
        return (
          <FoodBox food={food} key={food.name} />
        )}
        )}
      
      </Row>
    
      
      </div>
  )
}

export default App;
