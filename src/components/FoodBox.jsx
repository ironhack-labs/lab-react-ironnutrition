// Your code here

const FoodBox = ({ food }) => (

    <div className="food-box">

        <div>
            <h1>{food.name}</h1>
            <img src={food.image} alt={food.name} />
            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings}</p>
            <p>Total calories: {food.servings * food.calories}</p>
            <button>Delete</button>
        </div>
    </div>
)

export default FoodBox