function FoodBox(props){
    return(
        <div className="food">
            <h3>{props.food.name}</h3>
            <hr/>
            <img src={props.food.image} alt="image"/>
            <p>Calories : {props.food.calories} </p>
            <p>Servings : <b>{props.food.servings}</b> </p>
            <p><b>Total Calories : {props.food.calories * props.food.servings}</b> kcal </p>
            <button>Delete</button>
        </div>
    )
}

export default FoodBox