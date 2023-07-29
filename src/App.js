import './App.css';
import foods from "./foods.json"
import { useState } from 'react'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';




function App() {
  const [items, setItems] = useState(foods)
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
        name,
        image,
        calories,
        servings
    }
   
    const updatedFoodList = [...items]
     updatedFoodList.push(newFood)
    setItems(updatedFoodList)

    console.log(updatedFoodList)

    setName("")
    setImage("")
    setCalories("")
    setServings("")
  }

 

  return (
     <div className="App">
      <AddFoodForm />
      {items.map(item => {
        return <FoodBox food={ item } handleSubmit={handleSubmit}/>
      })}
    </div>
  );
}

export default App;
