import { useState } from 'react';
import foodsDB from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  //const [foods, setFoods] = useState(foodsDB);

  return (
    <div className="App">
      {/* {foods.map((food) => ( />
      ))} */}
      <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      />
    </div>
  );
}
export default App;
