function FoodBox({ food, onDelete }) {
    const totalCalories = food.servings * food.calories;
  
    return (
      <div style={styles.card}>
        <p>{food.name}</p>
        <img src={food.image} alt={food.name} style={styles.image} />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {totalCalories}</b> kcal
        </p>
        <button onClick={() => onDelete(food.id)}>Delete</button>
      </div>
    );
  }
  
  const styles = {
    card: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px',
      textAlign: 'center',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
    },
  };
  
  export default FoodBox;