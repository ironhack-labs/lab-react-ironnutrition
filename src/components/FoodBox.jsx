function FoodBox({food, deleteFoodItem}) {
  return (
    <div className="food-item">
  <p>{food.name}</p>

  <img src={food.image} />

  <p>Calories: {food.calories}</p>
  <p>Servings {food.servings}</p>

  <p>
    <b>Total Calories: {food.servings * food.calories} </b> kcal
  </p>

  <button className="cta-delete" onClick={()=> deleteFoodItem(food.id)}>Delete</button>
</div>
  )
}

export default FoodBox
