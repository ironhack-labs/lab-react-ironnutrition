// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';

function App() {
  const [foodList, setFoodList] = useState(foods);

  return (
    <div className="App">
      <h2>Add Food Entry</h2>
      <AddFoodForm setFoodList={setFoodList} />

      <h2>Food List</h2>
      {foodList.map((food, index) => {
        return (
          <div key={index}>
            <FoodBox
              name={food.name}
              calories={food.calories}
              image={food.image}
              servings={food.servings}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
