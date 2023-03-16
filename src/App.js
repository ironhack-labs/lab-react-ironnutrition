import './App.css';
import foodsData from './foods.json';
import 'antd';
import {useState} from 'react'
import FoodList from './components/FoodList';
import AddFood from './components/AddFood';
import Search from './components/Search';


function App() {

  let [foods, setFood] = useState(foodsData);
  const [query, setQuery] = useState("");

  const deleteFood = (foodName) => {
    setFood(food => {
      return food.filter(food => food.name !== foodName)
    })
  }

  const filteredFood = foods.filter(food => {
    return food.name.toLowerCase().includes(query.toLowerCase())
  })


  const addFood =(newFood) => {
    const updatedFood = [...foods, newFood]
    setFood(updatedFood)
  }

  return (
    <div className="App">
        <Search setQueryProp={setQuery} />
    <AddFood setFood={setFood} addFood={addFood} />
      {filteredFood.map(food => (
    <FoodList food={food} deleteFoodProp={deleteFood}/>

      ))
      }
    </div>
  );
}

export default App;
