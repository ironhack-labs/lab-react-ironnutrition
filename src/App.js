import { useState } from 'react';
import foodsDB from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  const [foods, setFoods] = useState(foodsDB);

  return (
    <div className="App">
      {foods.map((food) => ( 
        <FoodBox food={food} />
      ))}

    </div>
  );
}
export default App;
