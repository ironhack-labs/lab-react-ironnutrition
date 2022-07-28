import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from 'antd/lib/transfer/search';

function App() {
  const [foodsArr, setFoodsArr] = useState(foods);

  const deleteFood = (foodName) => {
    setFoodsArr((prevFoods) => {
      const newList = prevFoods.filter((element) => {
        return element.name !== foodName ? true : false;
      });

      return newList;
    });
  };

  return (
    <div className="App">
      <div>
      <AddFoodForm food={foodsArr} addFood={setFoodsArr} />
      <Search food={foodsArr}/>
        {foodsArr.map((food) => {
          return (
            <div key={food.name}>
              <FoodBox food={food} deleteCallback={deleteFood} />
              
            </div>
          );
        })}
        
      </div>
    </div>
  );
}

export default App;
