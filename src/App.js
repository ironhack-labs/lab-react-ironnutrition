/* eslint-disable no-unused-vars */
import foods from './foods.json'
import { useState } from 'react'
import { Row, Divider, Button, Col } from 'antd'
import FoodBox from './components/FoodBox';

function App() {
  const [foodsData, setFoodsData] = useState(foods)

  return (
    <div className="App">
      <Divider>
        <h1>Food List</h1>
      </Divider>

      <Row style={{ width: '100%', justifyContent: 'center', alignItems: 'center'}} gutter={[16, 16]}>
        {
          foodsData.map((food, i) => {
            return <FoodBox food={food} key={food.name + i} id={i} />;
          })
        }
      </Row>
    </div>
  );
}

export default App;
