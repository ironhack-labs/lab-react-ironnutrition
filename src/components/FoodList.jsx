import { useState } from "react";
import foodsJson from "../../src/foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import SearchBar from "./SearchBar";


export default function FoodList() {

  const [foods, setFoods] = useState(foodsJson);

  const addFood = (food) => {
    setFoods((prevState) => [...prevState, food]);
  }
  
  const deleteFood = (id) => {
    const updatedFood = foods.filter((food) => food.id != id);
    setFoods(updatedFood);
  }

  const searchFood = (event) => {

    const userInput = event.target.value.toLowerCase();

    if(userInput.length > 0){
      const searchedProduct = foods.filter((product) => {
        const lowerCaseFood = product.name.toLowerCase();
        const userInputLength = userInput.length;
        const compareFood =  lowerCaseFood.slice(0, userInputLength)
        return compareFood.includes(userInput);
      });
      
      setFoods(searchedProduct);
    }
    else{
      setFoods(foodsJson);
    }
  }


  const displayFood = () => {
    return foods.map ((food) => {
      return <FoodBox {...food} key={food.id} deleteFood={deleteFood}/>
    })
  }

  return (
    <div className="App">

      <h1>Add Food Form</h1>
      <AddFoodForm addFood={addFood}/>

      <h1>Search Bar</h1>
      <SearchBar searchFood={searchFood}/>

      <h1>Food List</h1>
      <div className="foodList">
        {foods.length > 0 ? displayFood() : <h3 className="no-food-header">No Food Found</h3>}
      </div>

    </div>
  );
}
