import './FoodBox.css'

function FoodBox({food, deleteFood}) {
  return (
    <div className='food-box'>
      <h2>{food.name}</h2>

      <img src={food.image} />

      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>

      <p>
        <b>Total Calories: {food.servings * food.calories} </b> kcal
      </p>

      <button onClick={()=> deleteFood(food.id)}>Delete</button>
    </div>
  );
}

export default FoodBox;
