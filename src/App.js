import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Divider } from 'antd';

function App() {
  const [foodList, setFoodList] = useState(foods);

  return (
    <div>
      <AddFoodForm foodList={foodList} setFoodList={setFoodList} />
      <Divider>Food List </Divider>
      <div className="foodList">
        {foodList.map((food) => {
          return <FoodBox key={food.name} food={food} />;
        })}
        ;
      </div>
    </div>
  );
}

export default App;
