import { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox/FoodBox';
import food from './foods.json'
import AddFoodForm from './components/AddFoodForm/AddFoodForm';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [foods, setFoods] = useState(food)
  const [search, setSearch] = useState('')

  const addFood = (food) => {
    setFoods([food, ...foods])
  };

  const onSearch = (value) => {
    setSearch(value)
  }

  const handleDelete = (name) => {
    setFoods((prev) => {
      return prev.filter(food => food.name !== name)
    })
  }

  const foodFiltered = foods
    .filter(f => f.name.includes(search))

  return (
    <div className="App">
      <div className='px-5'>
        <AddFoodForm addFood={addFood} />
      </div>
      <h1 className='text-center m-3'>Food List</h1>
      <SearchBar onSearch={onSearch} search={search} />
      <div className='d-flex flex-wrap'>
        {foodFiltered.map((fd) => 
          (
            <FoodBox key={fd.name} {...fd} onDelete={() => handleDelete(fd.name)}/>
          )
        )}
      </div>
    </div>
  );
}

export default App;
