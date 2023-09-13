import "../App.css";

function FoodBox(props) {
    return (
    props.food.map((food, index) => (
      <div key={index} className="card">
        <p>{food.name}</p>

        <img src={food.image} alt={food.name} style={{ width: "300px" }} />

        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>

        <p>
          <b>Total Calories: {food.servings * food.calories}</b> kcal
        </p>

        <button onClick={() => {
          props.callbackToDelete(food.name);
        }}>Delete</button>
      </div>
    ))
  );
}

export default FoodBox;
