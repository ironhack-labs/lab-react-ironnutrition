function FoodBox(props){

    return (
        <div className="Pictures">
            <p>{props.food.name}</p>

            <img src={props.food.image} width= "400px" height="300px"/>

            <p>Calories: {props.food.calories}</p>
            <p>Servings: {props.food.servings}</p>

            <p>
                <b>Total Calories: {props.food.servings * props.food.calories} </b> kcal
            </p>

            <button onClick={() => props.callbackToDelete(props.food.id)}>Delete</button>
        </div>
    )
}
export default FoodBox