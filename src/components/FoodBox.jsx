// Your code here

function FoodBox(props) {
  return (
    <div>
      <div>
        <p>{props.food.name}</p>

        <img src={props.food.image} />

        <p>Calories: {props.food.calories}</p>
        <p>Servings {props.food.servings}</p>

        <p>
          <b>Total Calories: {props.food.servings * props.food.calories} </b>{" "}
          kcal
        </p>

        <button>Delete</button>
      </div>
    </div>
  );
}

export default FoodBox;
