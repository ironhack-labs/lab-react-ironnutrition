import { useState } from 'react';
import foodsDB from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(foodsDB);
  const [search, setSearch] = useState('')

  function handleOnFoodAdded(foodAdded) {
    setFoods([foodAdded, ...foods])
  }

  const handleTextRecived = (inputText) => {
    setSearch(inputText);
  }

  const handleOnDeleteClicked = (name) => {
    setFoods(foods.filter((food) => food.name !== name))
  }

  return (
    <div>
      <Search onSearchTextAdded={handleTextRecived}/>
      <AddFoodForm onFoodAdded={handleOnFoodAdded}/>
      <div className="App d-flex flex-wrap">
        {foods.filter((food) => food.name.toLowerCase().includes(search.toLowerCase())).map((food) => (
          <FoodBox key={food.name} food={food} onDeleteClicked={handleOnDeleteClicked}  />
        ))}
      </div>
    </div>
  );
}
export default App;
