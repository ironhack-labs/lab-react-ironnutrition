function FoodBox({ food, index, handleDelete }) {
  return (
    <div className="food-card">
      <h2>{food.name}</h2>
      <img src={food.image} width={40} alt={food.name} />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>Total Calories: {food.calories} Kcal</p>

      <button
        onClick={() => {
          handleDelete(food.name);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default FoodBox;
