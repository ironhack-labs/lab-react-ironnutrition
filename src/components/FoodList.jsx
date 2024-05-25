import { useState } from "react";
import AddFoodForm from "./AddFoodForm";
import FoodBox from "./FoodBox";
import foodsJson from "./../foods.json"
const FoodList = () => {
    const [foods, setFoods] = useState(foodsJson);

  //Crear la función para añadir la receta
  const addFood = (food) => {
    //modifico la variable de esta con la funcion
    //No modifico la variable directamente
    setFoods(
      //Creo un nuevo array aplanando el original y añadiendo el food que vendra de addFoodForm
      [...foods, food]
    )
  }
  const deleteFood = (id) =>{
    setFoods(foods.filter((food) => food.id !== id))
  }
  return (
    <div className="container">
      <h1>LAB | React IronNutrition</h1>
      {/*Le pasamos la funcion via props */}
      <AddFoodForm addFood={addFood}/>
      <div className="row">
          {foods.map((food) => {
            return <FoodBox food={food} deleteFood={deleteFood} key={food.id} />;
          })}
      </div>
    </div>
  );
};

export default FoodList;