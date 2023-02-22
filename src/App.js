import './App.css';
import foodsJSON from "./foods.json";
import {useState} from "react"
import FoodBox from "./components/FoodBox"
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';


function App () {
  const [foodsData, setFoodsData] = useState(foodsJSON)
  const [foods, setFoods] = useState(foodsJSON)
  const [query, setQuery] = useState('');
  
  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood];

    setFoods(updatedFoods)
  }

    const deleteFood = (name) => {
      const filteredFoodData = foodsData.filter(food => {
        return food.name !== name
      })

      const filteredFoods = foods.filter(food => {
        return food.name !== name
      })

      setFoodsData(filteredFoodData)
      setFoods(filteredFoods)
    }


  return <div className="App">

    <Search query={query} setQuery={setQuery} />
    <AddFoodForm addNewFood={addNewFood}/>

    <h2>Food list:</h2>
    {foods
      .filter((food) =>
        food.name.toLowerCase().includes(query.toLowerCase()))
      .map((food) => 
      <div>
        <FoodBox key={food._id} food={food} deleteFood={deleteFood}/>
      </div>
    )}
  </div>;
}
export default App;