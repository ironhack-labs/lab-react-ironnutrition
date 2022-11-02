import foods from './foods.json';
import { useState } from 'react';

function App() {
  const [food, setFood] = useState(foods);
  return (
    <>
      <h2>Food List</h2>
      {food.map((food) => {
        return (
          <div>
            <p> {food.name} </p>
            <img src={food.image} alt={food.name} width={200} />
          </div>
        );
      })}
    </>
  );
}
export default App;
