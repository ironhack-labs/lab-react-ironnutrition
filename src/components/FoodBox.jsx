function FoodBox(props) {
  console.log(props);

  const deleteFood = () => {
    console.log("deleting food...");
  };
  return (
    <div>
      <h1>{props.food.name}</h1>

      <img src={props.food.image} height="100px" width="auto" />

      <p>Calories: {props.food.calories}</p>
      <p>Servings: {props.food.servings}</p>

      <p>
        <b>
          Total Calories: ({props.food.servings} * {props.calories}){" "}
        </b>{" "}
        kcal
      </p>

      <button
        onClick={deleteFood}
      >
        Delete
      </button>
    </div>
  );
}
export default FoodBox;
