import React from "react";

import foodsJson from "./foods.json";

import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

import "./App.css";
import "./index.css";

function App() {
  const [foods, setFoods] = React.useState(foodsJson);

  function deleteFood(id) {
    console.log("deleting the food", id);

    // Faire la copie
    const foodsCopy = foods.slice();

    // trouver l'index du food à supprimer
    const foodIndex = foods.findIndex((el) => {
      return el.id === id;
    });

    // supprimer le food de la copie
    foodsCopy.splice(foodIndex, 1);

    // maj le state
    setFoods(foodsCopy);
  }

  function addFood(obj) {
    const foodsCopy = foods.slice();
    foodsCopy.push({
      id: Math.random() * 1000000000000,
      name: obj.name,
      calories: obj.calories,
      image: obj.image,
      servings: obj.servings,
    });
    setFoods(foodsCopy);
  }

  return (
    <>
      <AddFoodForm addTheFood={addFood} />

      {foods.map((food) => {
        return (
          <FoodBox
            key={food.id}
            id={food.id}
            name={food.name}
            calories={food.calories}
            image={food.image}
            servings={food.servings}
            deleteTheFood={deleteFood}
          />
        );
      })}
    </>
  );
}

export default App;
