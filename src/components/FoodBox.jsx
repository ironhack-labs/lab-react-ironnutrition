// Your code here
export default function FoodBox(prop){
    const food = prop.food;

    function removeEntry(){
        prop.remove(food.id)
    }
    return(
        <div>
            <p>{food.name}</p>

            <img src={food.image} className = "food-img"/>

            <p>Calories: {food.calories}</p>
            <p>Servings {food.servings}</p>

            <p>
                <b>Total Calories: {food.calories * food.servings}</b> kcal
            </p>

            <button onClick={removeEntry}>Delete</button>
</div>
    )
}