const FoodBox = ({ food, onDeleteFood }) => {
    return (
        <div>
            <p>{food.name}</p>

            <img width='250px' src={food.image} />

            <p>Calories: {food.calories}</p>
            <p>Servings {food.servings}</p>

            <p>
                <b>Total Calories: {food.servings * food.calories} </b> kcal
            </p>

            <button onClick={onDeleteFood}>Delete</button>
            <hr />
        </div>
    )
}

export default FoodBox;