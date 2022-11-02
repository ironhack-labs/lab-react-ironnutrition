import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';

function App() {
  const [food, setFood] = useState(foods);
  return (
    <>
      {/* <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      /> */}
      <h2>Food List</h2>
      {food.map((food) => {
        return (
          <FoodBox
            food={{
              name: food.name,
              calories: food.calories,
              image: food.image,
              servings: food.servings,
            }}
          />
        );
      })}
    </>
  );
}
export default App;
