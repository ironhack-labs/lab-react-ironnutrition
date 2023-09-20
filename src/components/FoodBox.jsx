function FoodBox({food, onDelete}) {
  const handleDelete = () => {
    onDelete(food.id);
  };


    return (
        
        <div className="FoodBox">
        <p>{food.name}</p>
        <img src={food.image} alt={food.name} />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.servings * food.calories} kcal</b>
        </p>
        <button onClick={handleDelete}>Delete</button>

      </div>
    );
  }

export default FoodBox;