function FoodBox(props) {
    const { name, calories, image, servings } = props.food
    const food = props.food
    const deleteFood = props.deleteFood

    return (
        <div style={{borderStyle: "solid", marginBottom: "10px"}}>
            <p>{name}</p>

            <img src={image} />

            <p>Calories: {calories}</p>
            <p>Servings {servings}</p>

            <p>
                <b>Total Calories: {servings * calories} </b> kcal
            </p>

            <button onClick={() => deleteFood(food)}>Delete</button>
        </div>
    )
}

export default FoodBox;