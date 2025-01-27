import "./FoodBox.css";

function FoodBox({food, deleteFood}) {
    const {id, name, image, calories, servings} = food;
    
    return (
        <div className = "food-card">
            <p> {name} </p>
            <img src= {image}/>
            
            <p>Calories: {calories} </p>
            <p>Servings {servings}</p>
            <p>
                <b>Total Calories: {servings} * {calories} </b> kcal
                </p>
            <button onClick={() => deleteFood(id)}>Delete</button>
        </div>
    )
}

export default FoodBox;


