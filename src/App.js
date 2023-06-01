import './App.css';
import AddFoodForm from './Components/AddFoodForm';
import FoodBox from './Components/FoodBox';
import foods from "./foods.json";
import Search from './Components/Search';
import { useState} from 'react';


function App() {
  const [food, setFood] = useState(foods);
  const [search, setSearch] = useState('');
  const handelExpelled = (foodName) => {
    console.log("hello you were expelled", foodName);
    const filteredFoods = food.filter((foodItem) => {
      if (foodItem.name !== foodName) {
        return true;
      }
    });
    setFood(filteredFoods)
  }
  return (
    <div className="App">
     <AddFoodForm setFood={setFood} food={food}/>
     <Search food={food} search={search} setSearch={setSearch}/>
    
        
  {food
    .filter((oneFilteredFood) => {
      if (
        oneFilteredFood.name.toLowerCase().includes(search.toLowerCase())
      )
        return true;
    })

    .map((oneFood) => {
    return (
  
<FoodBox oneFood={oneFood} key={oneFood.name} handelExpelled={handelExpelled}/>

    )
  })}
  

    </div>
  );
}

export default App;
