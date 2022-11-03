import rawFoods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { v4 as uuidv4 } from 'uuid';

const foods = rawFoods.map((food) => ({ ...food, _id: uuidv4() }));

function App() {
  const [food, setFood] = useState(foods);

  const addNewFood = (newFood) => {
    const updatedFood = [...food, newFood];

    setFood(updatedFood);
  };

  return (
    <>
      <h1 className="flex">Food List</h1>
      <AddFoodForm setFood={setFood} addNewFood={addNewFood} />
      <div className="flex">
        {food.map((food) => {
          return (
            <FoodBox
              key={food._id}
              food={{
                name: food.name,
                calories: food.calories,
                image: food.image,
                servings: food.servings,
              }}
            />
          );
        })}
      </div>
    </>
  );
}
export default App;
