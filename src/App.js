import { useState } from 'react';
import './App.css';
import foodList from './foods.json'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {

  const [foods, setFoods] = useState(foodList)

  const handleAddFood = (newFood) => {
    setFoods([newFood, ...foods]);
  }

  return (
    <div className="App font-[Montserrat] bg-gray-800 text-white p-8">

      <h1 className="text-5xl font-black text-center">Food List</h1>

      <div className="flex justify-center my-8">
        <div className="w-1/2">
          <AddFoodForm addFood={handleAddFood} />
        </div>
      </div>

      <div className="flex justify-center my-6">
        <div className="w-2/3 grid grid-cols-3 place-items-center">
          {foods.map((food) => (
            <div key={food.name}>
              <div className="hover:scale-110 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-10 hover:shadow-lg hover:shadow-gray-600 my-10">
                <FoodBox food={food} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

export default App;
