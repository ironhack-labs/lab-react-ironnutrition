
function FoodBox({ foodList }) {
  return (
    <div className="card-list container">
      {foodList.map(food => {
        <div>
          <p>{food.name}</p>
          <img src={food.image} />
          <p>Calories: {food.calories}</p>
          <p>Servings {food.servings}</p>
          <p>
            <b>Total Calories: {food.servings * food.calories}</b> kcal
          </p>
          <button>Delete</button>
        </div>
      })}
    </div>
  )
}

export default FoodBox;