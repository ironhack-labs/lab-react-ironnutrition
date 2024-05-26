const FoodBox = ({ food, removeFood }) => {
    return (

<div className>
  <p> {food.name} </p>

  <img src= {food.image} />

  <p>Calories: {food.calories}</p>
  <p>Servings: {food.servings}</p>

  <p>
    <b>Total Calories: {food.servings * food.calories} </b> kcal
  </p>

  <button onClick={() => removeFood(food.id)}>Delete</button>

</div>
)}

export default FoodBox