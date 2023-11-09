// Iteration 2 and 3:
function FoodBox(props) {
    return (
        <div>
            <p>{props.foodDetails.name}</p>

            <img src={props.foodDetails.image} width = "100px"/>

            <p>Calories: {props.foodDetails.calories}</p>
            <p>Servings {props.foodDetails.servings}</p>

            <p>
                <b>Total Calories: {props.foodDetails.servings * props.foodDetails.calories} </b> kcal
            </p>

            <button onClick={function(){props.delete(props.foodDetails.id)}}>Delete</button>
        </div>
    )
}

export default FoodBox;