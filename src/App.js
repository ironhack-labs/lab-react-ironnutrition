import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './FoodBox/index';
import AddFoodForm from './AddFoodForm';
import Search from './Search';


function App() {
  const [foodList, setFoodList] = useState(foods);
  const addFood = (food)=>{
    const updateFoods = [food, ...foodList];
    setFoodList(updateFoods);
  };
  const handleSearch = (query) => {
    const filtered = foodList.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
  };


  return (
    <div>
      <AddFoodForm addFood={addFood}/>
      <Search onSearch={handleSearch} />
    <div className="App">
      {foodList.map((eachFood) => {
        return <FoodBox food={eachFood} />;
      })}
    </div>
    </div>
  );
}

export default App;
