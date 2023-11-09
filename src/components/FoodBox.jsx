// Iteration 2 and 3:
function FoodBox(props) {
    return (
        props.foodDetails.map(function (foodItem, index) {
            return (
                <div key={index}>
                    <p>{foodItem.name}</p>

                    <img src={foodItem.image} width="200px" />

                    <p>Calories: {foodItem.calories}</p>
                    <p>Servings {foodItem.servings}</p>

                    <p>
                        <b>Total Calories: {foodItem.servings * foodItem.calories} </b> kcal
                    </p>

                    <button onClick={function () { props.delete(foodItem.id) }}>Delete</button>
                </div>
            )
        }))

}

export default FoodBox;