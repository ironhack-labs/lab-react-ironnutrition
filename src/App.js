import './App.css';
import foodsData from './foods.json';
import 'antd';
import {useState} from 'react'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
// import Search from './components/Search';
import Search2 from './components/Search2';


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
    <Search2 setQueryProp={setQuery} />
    <AddFoodForm setFood={setFood} addFood={addFood} />
      {filteredFood.map(food => (
    <FoodBox food={food} deleteFoodProp={deleteFood}/>
    
      ))
      }
      </div>
  );
}


export default App;
