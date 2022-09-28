import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Divider } from 'antd';

function App() {
  const [food, setFood] = useState(foods);

  return (
    <div className="App">
      <AddFoodForm></AddFoodForm>

      <Divider>Food list</Divider>
      {food.map((item) => {
        return (
          <div>
            <FoodBox food={item}>
              <p> {item.name} </p>
              <img src={item.image} width={100} alt="food" />
              <button></button>
            </FoodBox>
          </div>
        );
      })}
    </div>
  );
}

export default App;
