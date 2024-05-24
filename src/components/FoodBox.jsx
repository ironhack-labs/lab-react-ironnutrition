function FoodBox({ food, removeFood }) {
  const handleDelete = () => {
    removeFood(food.id);
  };

  return (
    <div>
      <p>{food.name}</p>
      <img src={food.image} alt={food.name} />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>
        <b>Total Calories: {food.servings * food.calories} </b> kcal
      </p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default FoodBox;