
function FoodBox(props) {

    const totalCalories = props.food.servings * props.food.calories;

    return (
        <div>
            <p>{props.food.name}</p>

            <img src={props.food.image} alt='food img' style={{ width: '60px', height: '60px' }} />

            <p>Calories: {props.food.calories}</p>
            <p>Servings :  {props.food.servings}</p>

            <p>
                <b>Total Calories:{totalCalories}  </b> kcal
            </p>

            <button style={{ backgroundColor: '#c2b4b4' }} onClick={() => props.handleDelete(props.food.id)}>Delete</button>
        </div>
    )
}

export default FoodBox