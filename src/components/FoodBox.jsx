function FoodBox(props){
    const {food, clickToDelete} = props
    return(
        <div className="food-box">
            <p>{food.name}</p>
            <img className="box-image" src={food.image}/>
            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings}</p>
            <p>
                <b>Total Calories: {food.servings * props.food.calories}</b> kcal
            </p>
            <button onClick={()=> clickToDelete(food.id)}>Delete</button>
        </div>
    )
}

export default FoodBox;