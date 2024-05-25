const FoodBox = ({ food, deleteFood }) => {
  return (
    <div className="col mb-3">
      <div className="card" style={{ width: "18rem" }}>
        <p>{food.name}</p>

        <img src={food.image} className="card-img-top" style={{height: "180px"}}/>
        <div>
          <p className="card-text">Calories: {food.calories}</p>
          <p className="card-text">Servings {food.servings}</p>

          <p>
            <b>Total Calories: {food.servings * food.calories} </b> kcal
          </p>

          <button onClick={() => deleteFood(food.id)} className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default FoodBox;
