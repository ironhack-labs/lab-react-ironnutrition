const FoodBox = ({
  food: { id, name, image, calories, servings },
  removeFood,
}) => {
  return (
    <div className="col card d-flex align-items-center">
      <h5 className="card-title">{name}</h5>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <p className="card-text">Calories: {calories}</p>
        <p className="card-text">Servings {servings}</p>
        <p className="card-text">
          <b>Total Calories: {servings * calories} </b> kcal
        </p>
        <button className="btn btn-danger" onClick={() => removeFood(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default FoodBox;

FoodBox.defaultProps = {
  food: {},
  removeFood: () => {},
};
