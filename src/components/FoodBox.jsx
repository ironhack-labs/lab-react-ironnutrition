function FoodBox({ food, onDelete }) {
  const handleDelete = () => onDelete(food);
  return (
    <div className="card">
      <p>{food.name}</p>
      <img
        className="card-img-top"
        style={{ maxHeight: "100px", objectFit: "contain" }}
        src={food.image}
      />
      <div className="card-body">
        <p className="card-text">Calories: {food.calories}</p>
        <p className="card-text">Servings: {food.servings}</p>
        <p className="card-text">
          <b>Total Calories: {food.servings * food.calories} </b>
          kcal
        </p>
        <button
          className="btn btn-primary"
          role="button"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default FoodBox;
