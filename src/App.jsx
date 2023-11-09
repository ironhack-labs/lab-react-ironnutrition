import { useState } from "react";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import "./App.css";

function App() {
  const [foods, setFoods] = useState(foodsJson);
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [calories, setCalories] = useState("")
  const [servings, setServings] = useState("")
  

  const deleteItem = (foodID) => {
    const newFoodsList = foods.filter((foodDetails) => {
      return foodDetails.id !== foodID;
    });
    setFoods(newFoodsList);
  };

  const addItem = (event) => {
    event.preventDefault()
    const newFoodItem = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    }
    console.log(newFoodItem)
    const newFoodArray = [newFoodItem, ...foods]
    setFoods(newFoodArray)
  }


  return (
    <>
      <AddFoodForm 
      callbackToAdd={addItem}

      nameValue={name}
      setNameValue={setName}

      imageValue={image}
      setImageValue={setImage}

      caloriesValue={calories}
      setCaloriesValue={setCalories}

      servingsValue={servings}
      setServingsValue={setServings}
      />
      <FoodBox foodArray={foods} callbackToDelete={deleteItem} />

    </>
  );
}

export default App;
