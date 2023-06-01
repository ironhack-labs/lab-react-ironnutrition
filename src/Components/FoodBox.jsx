function FoodBox({ food, deleteButton }) {
  return (
    <div>
      <p>{food.name}</p>
      <img src={food.image} alt="" width={100} />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <button
        onClick={() => {
          deleteButton(food.name);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default FoodBox;
