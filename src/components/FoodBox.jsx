export default function FoodBox({food, onDelete}) {
  return (
    <div className="foodCard">
      <p style={{ fontSize: '28px', fontWeight: '600', margin: '0'}}>{food.name}</p>

      <img src={food.image} style={{ width: '150px', height: '150px' }} alt={"Image of " + food.name} />

      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>

      <p>
        <b>Total Calories: {food.servings * food.calories} </b> kcal
      </p>

      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
