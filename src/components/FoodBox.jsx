const FoodBox = ({ food, onDelete }) => {
  const { name, image, calories, servings, id } = food;
  const totalCalories = servings * calories;

  return (
    <div className="Food card">
      <h2 className="card-title">{name}</h2>
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <p style={{ marginBottom: "10px", marginTop: "10px" }}>Calories: {calories}</p>
        <p style={{ marginBottom: "10px" }}>
          Servings: <b>{servings}</b>
        </p>
        <p style={{ marginBottom: "10px" }}>
          <b>Total Calories: {totalCalories}</b> kcal
        </p>
        <button className="btn btn-danger" value={id} onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default FoodBox;
