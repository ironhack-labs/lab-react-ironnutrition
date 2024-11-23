function FoodBox({ food, onDeleteFood }) {
  return (
    <div style={{ 
      border: '1px solid lightgrey', 
      paddingTop: '1rem',
      }} 
    >

      <p>{food.name}</p>

      <img src={food.image} />

      <p>Calories: {food.calories}</p>
      <p>Servings {food.servings}</p>

      <p>
        <b>Total Calories: {food.calories * food.servings} </b> kcal
      </p>

      <button
        onClick={() => {
          onDeleteFood(food);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default FoodBox;