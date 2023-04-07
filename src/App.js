import { useState } from 'react';
import './App.css';
import foodList from './foods.json'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

function App() {

  const [foods, setFoods] = useState(foodList);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddFood = (newFood) => {
    setFoods([newFood, ...foods]);
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredFood = foods.filter((food) => (
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  ))

  const handleDelete = (foodDelete) => {
    const newFoods = foods.filter((food) => food !== foodDelete);
    setFoods(newFoods)
  }

  return (
    <div className="App font-[Montserrat] bg-gray-800 text-white p-8 min-h-screen">

      <h1 className="text-5xl font-black text-center">Food List</h1>

      <div className="flex justify-center mt-8">
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      </div>

      <div className="flex justify-center my-8">
        <div className="w-1/2">
          <AddFoodForm addFood={handleAddFood} />
        </div>
      </div>

      <div className="flex justify-center my-6">
        <div className="w-2/3 grid grid-cols-3 place-items-center">
          {filteredFood.map((food) => (
            <div key={food.name}>
              <div className="hover:scale-110 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-10 hover:shadow-lg hover:shadow-gray-600 my-10">
                <FoodBox food={food} handleDelete={handleDelete} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

export default App;
