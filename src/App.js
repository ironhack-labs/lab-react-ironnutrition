import { useState } from 'react';
import './App.css';
import foodList from './foods.json'

function App() {

  const [foods, setFoods] = useState(foodList)

  return (
    <div className="App font-[Montserrat] bg-gray-800 text-white h-screen p-8">
      <h1 className="text-5xl font-black text-center">Food List</h1>
      <div className="flex justify-center my-6">
        <ul className="text-center">
          {foods.map((food) => (
            <li key={food.name}>
              <p>{food.name}</p>
              <img src={food.image} alt={food.name} className="w-32 h-auto rounded-xl" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
