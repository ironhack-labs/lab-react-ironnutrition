function FoodBox(props) {



    return(
        
        <div>
            <h4>{props.food.name}</h4>
            <img src={props.food.image} width={100} />
            <p>Calories: {props.food.calories}</p>
            <p>Servings: {props.food.servings}</p>
            <p>Total Calories: {props.food.calories} kcal</p>
            <button onClick={() => props.deleteFood(props.food.name)}>Delete</button>
        </div>
    )

}

export default FoodBox