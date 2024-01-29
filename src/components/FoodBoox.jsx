
const FoodBoox = ( {food, onDelete} ) => {
    return (
        <div className="card-list">
            <div className="card">
                <h5 className="card-title">{food.name}</h5>
                <img className="card-img-top" width={300} src={food.image} />

                <div className="card-body">
                    <p className="card-text">{food.calories}</p>
                    <a href="#">{food.servings} </a>
                </div>
                <p>
                    <b>Total Calories: {food.servings * food.calories}</b> kcal
                </p>

                <button onClick={()=> onDelete(food.id)} type="button" className="btn btn-danger">Delete</button>
            </div>
        </div>
    );
};

export default FoodBoox;