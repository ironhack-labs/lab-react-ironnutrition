import { useState } from 'react';
import './App.css';
import foodList from './foods.json'
import FoodBox from './components/FoodBox';

function App() {

  const [foods, setFoods] = useState(foodList)

  return (
      <div className="App font-[Montserrat] bg-gray-800 text-white p-8">

        <h1 className="text-5xl font-black text-center">Food List</h1>

        <div>
        <FoodBox food={
          {
            "name": "Orange",
            "calories": 85,
            "image": "https://i.imgur.com/abKGOcv.jpg",
            "servings": 1
          }
        } />
      </div>

        <div className="flex justify-center my-6">
          <div className="w-2/3 grid grid-cols-3 place-items-center">
            {foods.map((food) => (
              <div key={food.name} className="w-60 h-40 my-8 rounded-xl border border-gray-400 hover:scale-110 transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-white hover:border-0 hover:text-gray-800 hover:font-semibold flex flex-col items-center justify-center">
                <div>
                  <p className="text-center mb-2">{food.name}</p>
                  <img src={food.image} alt={food.name} className="w-32 h-auto rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

  );
}

export default App;
