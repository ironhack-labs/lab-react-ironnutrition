function FoodBox(props) {
  return (
    <div style={{ border: "1px solid grey" }}>
      <p>{props.food.name}</p>
      <img style={{ maxHeight: "100px" }} src={props.food.image} />
      <p>Calories: {props.food.calories}</p>
      <p>Servings: {props.food.servings}</p>

      <p>
        <b>Total Calories: {props.food.servings * props.food.calories}</b> kcal
      </p>

      <button
        onClick={() => {
          props.handleDelete(props.food.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default FoodBox;
