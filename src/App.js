import { Row, Divider, Input } from 'antd';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import './App.css';

function App() {
  const [food, setFood] = useState(foods);

  const addFood = (newFood) => {
    setFood([newFood, ...food]);
  };

  return (
    <div className="App">
      <AddFoodForm addFood={addFood} />
      <Divider>
        <h2>Food List</h2>
      </Divider>
      {food.map(({ name, image, calories, servings }) => {
        return (
          <div key={name}>
            <Row style={{ width: '100%', justifyContent: 'center' }}>
              <FoodBox
                name={name}
                calories={calories}
                image={image}
                servings={servings}
              />
            </Row>
          </div>
        );
      })}
    </div>
  );
}

export default App;
