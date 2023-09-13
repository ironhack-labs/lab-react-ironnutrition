import "./FoodBox.css";

function FoodBox(props) {
  return (
    <div>
      {props.food.map((food, index) => {
        return (
          <div key={food.name}>
            <p>{food.name}</p>

            <img className="foodImg" src={food.image} />

            <p>Calories: {food.calories}</p>
            <p>Servings {food.servings}</p>

            <p>
              <b>Total Calories: {food.servings * food.calories}</b> kcal
            </p>

            <button
              onClick={() => {
                props.callbackToDelete(food.name);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default FoodBox;
