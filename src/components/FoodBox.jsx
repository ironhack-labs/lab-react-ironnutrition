// Your code here
function FoodBox({ food, clickToDelete }) {
  const { name, calories, image, servings } = food;
  const totalCalories = calories * servings;

  return (
    <div className="FoodBox">
      <p>{name}</p>
      <img src={image} alt={name} />
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      <p>
        <b>Total Calories: {totalCalories} kcal</b>
      </p>
      <button onClick={() => clickToDelete(food.id)}>Delete</button>
    </div>
  );
}

export default FoodBox;
