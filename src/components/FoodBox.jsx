function FoodBox(props){
    return(
        <div>
            <h3>{props.food.name}</h3>
            <hr/>
            <img src={props.food.image} alt="image"/>
            <p>Calories : {props.food.calories} </p>
            <p>Servings : {props.food.servings} </p>
            <p>Total Calories : {props.food.calories * props.food.servings} </p>
            <button>Delete</button>
        </div>
    )
}

export default FoodBox