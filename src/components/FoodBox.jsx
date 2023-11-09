function FoodBox(props) {
    return (
    <>
    <h1>Food List</h1>
      {props.foodArray.map(function (foodObject) {
        return (
          <div key={foodObject.id}>
            <h2>{foodObject.name}</h2>

            <img src={foodObject.image} />

            <p>Calories: {foodObject.calories}</p>
            <p>Servings {foodObject.servings}</p>

            <p>
              <b>
                Total Calories: {foodObject.servings} * {foodObject.calories} kcal
              </b>
            </p>

            <button
              onClick={function () {
                props.callbackToDelete(foodObject.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default FoodBox;
