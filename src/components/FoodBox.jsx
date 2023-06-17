function FoodBox(props) {
  let total = props.food.servings * props.food.calories;
  return (
    <div key={props.food.id}>
      <h3>{props.food.name}</h3>

      <img src={props.food.image} className="logo" />

      <p>Calories: {props.food.calories}</p>
      <p>Servings {props.food.servings}</p>

      <p>
        <b>Total Calories: {total}</b>
        kcal
      </p>

      <button
        onClick={function (event) {
          props.delete(props.food.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default FoodBox;
