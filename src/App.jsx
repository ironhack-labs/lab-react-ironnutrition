import React from "react";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
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

  return (
    <>
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
