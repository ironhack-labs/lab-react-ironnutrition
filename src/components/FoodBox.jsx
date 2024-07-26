// Your code here


function FoodBox({food, deleteFood}) {
  return (
    <div className="food-box">
  <h2>{food.name}</h2>

  <img src={food.image} />

  <p>Calories: {food.calories}</p>
  <p>Servings {food.servings}</p>

  <p>
    <b>Total Calories: {food.calories*food.servings}</b> kcal
  </p>

  <button onClick={deleteFood}>Delete</button>
</div>
  )
}

export default FoodBox