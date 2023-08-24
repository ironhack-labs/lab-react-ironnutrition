import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from './components/FoodBox'
import AddFood from './components/AddFoodForm'
import {useState} from "react"


function App() {
  //State Variables
  const [foods, setFoods] = useState(foodsJson)

  const deleteFood = (foodId) => {
    const filteredFood = foods.filter((food)=> {
      return food.id !== foodId
    })

    setFoods(filteredFood)
    
  }
    const addNewFood = (newFood) => {
      const updatedFood = [...foods, newFood]
      setFoods(updatedFood)

  }


  return (
    <div className="App">

{/* Iteration 2 */}
{/* <FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
} } 
/> */}

{/* Iteration 3 */}
{foods.map((food)=> {
  return (
    <FoodBox
    key = {food.id}
    food = {food}
    clickToDelete={deleteFood}
    />
  )
})}

<AddFood addNewFood={addNewFood}/>


    </div>
  );
}


export default App;
