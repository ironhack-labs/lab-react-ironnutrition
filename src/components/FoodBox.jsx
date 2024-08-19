
function FoodBox({ food, onDelete }) {
    return (
      <div className="food-box">
        <h2>{food.name}</h2>
        <img src={food.image} alt={food.name} />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <button onClick={() => onDelete(food.id)}>Delete</button>
      </div>
    );
  }
  
  export default FoodBox;