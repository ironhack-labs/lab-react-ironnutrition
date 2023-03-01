import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Searchbar from './components/Searchbar';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [foodsToDisplay, setFoodsToDisplay] = useState(foods);

  const addNewFood = (newFood) => {
    setFoodList([...foodList, newFood]);
    setFoodsToDisplay([...foodsToDisplay, newFood]);
  };

  const deleteFood = (name) => {
    const filteredFoods = foodList.filter((eachFood) => {
      if (eachFood.name !== name) {
        return true;
      } else {
        return false;
      }
    });
    setFoodList(filteredFoods);

    const filteredDisplayFoods = foodsToDisplay.filter((eachFood) => {
      if (eachFood.name !== name) {
        return true;
      } else {
        return false;
      }
    });
    setFoodsToDisplay(filteredDisplayFoods);
  };

  const filterFoods = (searchInput) => {
    const filteredFoods = foodList.filter((eachFood) => {
      if (eachFood.name.toLowerCase().includes(searchInput.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
    setFoodsToDisplay(filteredFoods);
  };

  return (
    <div className="App">
      <h1>Food List</h1>

      <Searchbar filterFoods={filterFoods} />
      <AddFoodForm addNewFood={addNewFood} />
      <div id="cards-container">
        {foodsToDisplay.map((eachFood) => {
          return (
            <div className="card">
              <FoodBox
                key={eachFood.name}
                food={eachFood}
                deleteFood={deleteFood}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
