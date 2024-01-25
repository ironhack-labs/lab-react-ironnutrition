import React from "react";

function FoodBox(props) {
  const { foods, setFoods } = props;

  console.log();

  const handleDeleteItem = (id) => {
    const filteredFoods = foods.filter((food) => {
      return food.id !== id;
    });
    setFoods(filteredFoods);
  };

  return (
    <div>
      {foods.map((food) => {
        return (
          <div key={food.id}>
            <p>{food.name}</p>

            <img src={food.image} width={"100px"} />

            <p>Calories: {food.calories}</p>
            <p>Servings {food.servings}</p>

            <p>
              <b>Total Calories: {food.servings * food.calories} </b> kcal
            </p>

            <button
              onClick={() => {
                handleDeleteItem(food.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default FoodBox;
