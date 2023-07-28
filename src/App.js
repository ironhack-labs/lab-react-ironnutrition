import { useState } from 'react';
import './App.css';
import foods from './foods.json'
import { Row, Divider, Button } from 'antd'
import FoodBox from './components/FoodBox';

function App() {
  const [ foodsData, setFoodsData ] = useState(foods);

  return (
    <div className="App">
      <Divider>
        <h2>Food List</h2>
      </Divider>
          <Row>
            {foodsData.map((food, i) => {
              return <FoodBox key={food.name + 1} food={food} id={i}/>
            })}
          </Row>
    </div>
  );
}

export default App;
