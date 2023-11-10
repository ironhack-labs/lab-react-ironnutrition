// Your code here
function FoodBox(props) {
  return (
    <>
      {props.foodDetails.map((food) => {
       
       return (
          
          <div key={food.id}>
            
            <h2>{food.name}</h2>

            <img src={food.image} style={{ width: "400px" }} />

            <p>Calories: {food.calories}</p>
            <p>Servings {food.servings}</p>

            <p>
              <b>Total Calories: {food.servings * food.calories} kcal</b>
            </p>

            <button
              onClick={function () {
                props.callbackToDelete(food.id);
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
