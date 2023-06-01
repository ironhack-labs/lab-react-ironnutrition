function FoodBox({ food }) {
  return (
    <div>
      <h2>{food.name}</h2>
      <img src={food.image} />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>Total Calories: {food.calories} Kcal</p>
    </div>
  );
}

export default FoodBox;
