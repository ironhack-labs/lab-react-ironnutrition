const FoodBox = ({ food, onDelete }) => {
  const { id,name, calories, image, servings } = food;
  const totalCalories = servings * calories;
const handleDelete = () => {
  onDelete(id);
};
  return (
    <div>
      <p>{name}</p>

      <img src={image} alt={name} style={{width: "300px"}} />

      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>

      <p>
        <b>Total Calories: {totalCalories} </b> kcal
      </p>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default FoodBox;