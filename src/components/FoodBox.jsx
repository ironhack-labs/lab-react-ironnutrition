const FoodBox = ({ name, image, calories, servings, onDelete }) => {
  const totalCalories = servings * calories;

  return (
    <div className="Food card">
      <h2 className="card-title">{name}</h2>
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <p style={{ marginBottom: "10px" }}>Calories: {calories}</p>
        <p style={{ marginBottom: "10px" }}>Servings: {servings}</p>
        <p style={{ marginBottom: "10px" }}>
          <b>Total Calories: {totalCalories}</b> kcal
        </p>
        <button className="btn btn-danger" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default FoodBox;
