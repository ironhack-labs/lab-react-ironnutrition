import './FoodBox.css'

function FoodBox({ food, onDelete }) {

    const handleDelete = () => {
        onDelete(food)
    }

  return (
    <div className='food-card'>

        <p><strong>{food.name}</strong></p>

        <img src={food.image} />

        <p>Calories: {food.calories}</p>
        <p>Servings {food.servings}</p>

        <p>
            <b>Total Calories: {food.servings * food.calories} </b> kcal
        </p>

        <button onClick={handleDelete}>Delete</button>

    </div>
  )
}

export default FoodBox