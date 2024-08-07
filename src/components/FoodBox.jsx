// Your code here

function FoodBox(props) {

    const {food, deleteFood} = props;

    // "id": "9e7f0d61-aa6b-418a-b56a-6418d19e6e1d",
    //     "name": "Pizza",
    //     "calories": 400,
    //     "image": "https://i.imgur.com/eTmWoAN.png",
    //     "servings": 1

    return (
        <div className="food-card">
            <p>{food.name}</p>

            <img className="food-image" src={food.image}/>

            <p>Calories: {food.calories}</p>
            <p>Servings {food.servings}</p>

            <p>
                <b>Total Calories: {food.servings * food.calories} </b> kcal
            </p>

            <button onClick={() => deleteFood(food)}>Delete 🗑️</button>
        </div>
    )
}

export default FoodBox;