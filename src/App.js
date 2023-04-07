import { Row, Divider, Input } from 'antd';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import './App.css';

function App() {
  const [food, setFood] = useState(foods);

  return (
    <div className="App">
      <Divider>
        <h2>Food List</h2>
      </Divider>
      {food.map(({ name, image, calories, servings }) => {
        return (
          <Row style={{ width: '100%', justifyContent: 'center' }}>
            <FoodBox
              name={name}
              calories={calories}
              image={image}
              servings={servings}
            />
          </Row>
        );
      })}
    </div>
  );
}

export default App;
