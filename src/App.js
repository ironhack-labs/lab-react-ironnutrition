import foods from './foods.json';

import { Row, Divider, Button } from 'antd';

import { useState } from 'react';
import { FoodBox } from './components/FoodBox';
import { AddFoodForm } from './components/AddFoodForm';

export function App() {
  const [foodList, setFoodList] = useState(foods);

  const addFood = (newFood) => {
    setFoodList([newFood, ...foodList]);
  };

  return (
    <div className="App">
      <AddFoodForm addFood={addFood} />

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row
        style={{
          width: '100%',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        {foodList.map((food, index) => {
          return <FoodBox key={'FoodBox: ' + index} food={food} />;
        })}
      </Row>
    </div>
  );
}

export default App;
