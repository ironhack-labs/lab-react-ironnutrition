import './FoodBox.css'
import Button from './Button'

const FoodBox = ({food, onDeleteFood}) => {
    const totalCalories = food.servings * food.calories;
    return (
        
        <div className='mb-4 mt-4'>
  <p><strong>{food.name}</strong></p>

  <img className='img-box' src={food.image} />

  <p>Calories: {food.calories}</p>
  <p>Servings <strong>{food.servings}</strong></p>

  <p>
    <strong>Total Calories: {totalCalories} </strong> kcal
  </p>
  <Button type="danger" action={() => onDeleteFood(food.id)}>Delete</Button>
</div>
    )
}

export default FoodBox