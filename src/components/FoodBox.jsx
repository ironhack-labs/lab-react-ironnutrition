// Your code here
function FoodBox(props){
    const {food, clickToDelete}=props

    return(
        <div>
            <h2>{food.name}</h2>

            <img src={food.image} />

            <p>Calories: {food.calories}</p>
            <p>Servings {food.servings}</p>

            <p>
                <b>Total Calories: {food.calories * food.servings} </b> kcal
            </p>

            <button onClick={()=>clickToDelete(food.id)}>Delete</button>
        </div>
    )
}

export default FoodBox;