import { useState } from 'react';
import foodsDB from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodsDB);

  function handleOnFoodAdded(foodAdded) {
    setFoods([foodAdded, ...foods])
  }

  return (
    <div>
      <AddFoodForm onFoodAdded={handleOnFoodAdded}/>
      <div className="App d-flex flex-wrap">
        {foods.map((food) => (
          <FoodBox key={food.name} food={food} />
        ))}
      </div>
    </div>
  );
}
export default App;
