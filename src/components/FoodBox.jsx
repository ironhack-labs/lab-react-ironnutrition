
function FoodBox(props){
    const {food, clickToDelete}=props;

    return(
        <div>
            <p>{food.name}</p>
            <p>Calories: {food.calories}</p>
            <img src={food.image} width= "250" height="150"/>
            <p>Servings: {food.servings}</p>
            <p>
                <b>Total Calories: {food.servings*food.calories}</b> kcal
            </p>
            <button onClick={()=> clickToDelete(food.id)}>Delete</button>
        </div>
    )
}

export default FoodBox;