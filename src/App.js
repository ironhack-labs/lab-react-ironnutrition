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
    const filteredFoods = allFoods.filter((food) => {
      return food.key !== foodId;
    });
    setFoods(filteredFoods);
  };

  const filterFood = (str) => {
    // const searchTerm = event.target.value;
    // console.log(event.target.value);

    // let nextFoods = [...allFoods];
    // console.log('2', searchTerm);
    // console.log('1', nextFoods);

    // if (searchTerm !== '') {
    //   nextFoods = allFoods.filter((food) => {
    //     food.name.startsWith(searchTerm);
    //   });
    // }
    let filteredFood;
    if (str === '') {
      filteredFood = [...allFoodsData];
    } else {
      filteredFood = allFoodsData.filter((food) => {
        console.log('foodname!', food.toLowerCase());
        console.log('str!', str.toLowerCase());

        return food.name.toLowerCase() === str.toLowerCase();
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
