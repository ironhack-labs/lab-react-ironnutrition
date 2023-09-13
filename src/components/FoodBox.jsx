function FoodBox(props) {


    const caloriesTotal = props.food.servings * props.food.calories

    return (
        <div>
            <p>{props.food.name}</p>

            <img src={props.food.image} alt={props.food.name} />

            <p>Calories: {props.food.calories}</p>
            <p>Servings: {props.food.servings}</p>

            <p>
                <b>Total Calories: {caloriesTotal} </b> kcal
            </p>

            <button onClick={() => props.callbackToDelete(props.food.id)}>Delete</button>
        </div>
    )
}

export default FoodBox;