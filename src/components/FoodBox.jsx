//item 2
function FoodBox(props) {
    const { food, deleteFood } = props;

    return (
        <div>
            <p>{food.name}</p>

            <img src={food.image} style={{ width: 250, margin: 10 }} />

            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings}</p>

            <p>
                <b>Total Calories: {food.servings} * {food.calories} </b> kcal
            </p>

            <button onClick={(e) => deleteFood(food.id)}>Delete</button>
        </div>
    )
}

export default FoodBox
