// Your code here
function FoodBox({ food, handleDelete }) {
    return (
        <div>
            <div className="container border border-black d-flex flex-column align-items-center mt-1 p-3">
                <p className="fs-1 fw-bold">{food.name}</p>
                <img width="350px" src={food.image} />
                <p>Calories: {food.calories}</p>
                <p>Servings {food.servings}</p>
                <p>
                    <b>Total Calories: {food.servings * food.calories} </b> kcal
                </p>
                <button id={food.id} onClick={(event) => handleDelete(event)}>Delete</button>
            </div>
        </div>
    );
}

export default FoodBox;
