function FoodBox({ food, onDeleteFood, onUpdateFood }) {
    const handleDecreaseServings = () => {
      if (food.servings > 0) {
        onUpdateFood(food.name, food.servings - 1);
      }
    };
  
    return (
      <div>
        <p>{food.name}</p>
        <img src={food.image} alt={food.name} style={{ maxWidth: "200px" }} />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings}</b> kcal
        </p>
        <button onClick={handleDecreaseServings}>Decrease Servings</button>
        <button onClick={() => onDeleteFood(food.name)}>Delete</button>
      </div>
    );
  }
  
  export default FoodBox;
  