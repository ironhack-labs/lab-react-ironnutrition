import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { useState } from 'react';

function App() {
  const [allFoods, setFoods] = useState(foods);
  const [allFoodsData, setAllFoodsData] = useState(foods);

  const addNewFood = (newFood) => {
    const updatedFoods = [...allFoods, newFood];
    const updatedFoodsData = [...allFoodsData, newFood];
    setFoods(updatedFoods);
    setAllFoodsData(updatedFoodsData);
  };

  const deleteFood = (foodId) => {
    const filteredFood = allFoods.filter((food) => {
      return food.name !== foodId;
    });

    setFoods(filteredFood);
  };

  const filterFood = (str) => {
    let filteredFood;
    if (str === '') {
      filteredFood = [...allFoodsData];
    } else {
      filteredFood = allFoodsData.filter((food) => {
        return food.name.toLowerCase().includes(str);
      });
    }

    setFoods(filteredFood);
  };

  return (
    <div className="App">
      <Search filterFood={filterFood} />
      <AddFoodForm addFood={addNewFood} />
      {allFoods.map((food) => {
        const key = food.name + food.calories;
        return <FoodBox foods={food} key={key} deleteFood={deleteFood} />;
      })}
    </div>
  );
}
export default App;
