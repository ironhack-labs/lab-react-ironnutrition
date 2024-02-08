export default function FoodBox({ food, deleteFood }) {
  return (
    <div className="FoodBox">
      <p>{food.name}</p>
      <img src={food.image} />

      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>

      <p>
        <b>Total Calories: {food.servings * food.calories} </b> kcal
      </p>

      <button onClick={deleteFood}>Delete</button>
    </div>
  );
}
