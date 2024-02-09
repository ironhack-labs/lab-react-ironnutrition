// Your code here


const FoodBox = ({ food, onDelete }) => {
    const { name, id, calories, image, servings } = food;
    const totalCalories = servings * calories;
    return (
        <div>
            <div>
                <p>{name}</p>

                <img src={image} style={{ width: "700px", height: "400px", objectFit: "cover" }} />

                <p>Calories: {calories}</p>
                <p>Servings {servings}</p>

                <p>
                    <b>Total Calories: {totalCalories} </b> kcal
                </p>

                <button onClick={() => onDelete(id)} className="btn btn-danger">Delete</button>
            </div>
        </div>
    );
};

export default FoodBox;