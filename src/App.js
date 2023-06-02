import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Divider } from 'antd';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [input, setInput] = useState('');
  const filteredFoods = foodList.filter((food) => {
    return food.name.toLowerCase().includes(input.toLowerCase());
  });
  const deleteFoodCard = (foodName) => {
    const updatedFoodList = foodList.filter((food) => {
      if (food.name !== foodName) {
        return true;
      }
    });
    setFoodList(updatedFoodList);
  };

  return (
    <div>
      <AddFoodForm foodList={foodList} setFoodList={setFoodList} />
      <Search setFoodList={setFoodList} input={input} setInput={setInput} />
      <Divider>Food List </Divider>
      <div className="foodList">
        {filteredFoods.map((food) => {
          return (
            <FoodBox
              key={food.name}
              food={food}
              deleteFoodCard={deleteFoodCard}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
