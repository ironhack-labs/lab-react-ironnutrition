import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
function App() {
  const [food, setFood] = useState(foodsJson)
  const [name, setName] = useState()
  const [img, setImg] = useState()
  const [calories, setCalories] = useState("1")
  const [servings, setServings] = useState("1")

  function deleteFood(id) {

    const newFoodList = food.filter((item) => item.id !== id)
    return setFood(newFoodList)
  }

  const foodlist = food.map((item) => <FoodBox key={item.id} food={item} handleDelete={deleteFood} />)
  function addFoodName(e) {
    console.log(e.target.value)
    setName(e.target.value)
  }
  function addFoodImg(e) {
    console.log(e.target.value)
    setImg(e.target.value)
  }
  function addFoodCalories(e) {
    console.log(e.target.value)
    setCalories(e.target.value)
  }
  function addFoodServings(e) {
    console.log(e.target.value)
    setServings(e.target.value)
  }
  function addFood() {
    const newFood = {
      id: food.length + 1,
      name: name,
      image: img,
      calories: parseInt(calories),
      servings: parseInt(servings)
    };
    setFood([newFood, ...food]);
    // Clear the form fields after adding the food
    setName("");
    setImg("");
    setCalories("1");
    setServings("1");
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addName={addFoodName} addImg={addFoodImg} addCalories={addFoodCalories} addServings={addFoodServings} addFood={addFood} />
      <div>{foodlist}</div>
    </div>
  );
}

export default App;
