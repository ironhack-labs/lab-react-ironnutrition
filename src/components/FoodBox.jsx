function FoodBox(props) {
  const { name, image, calories, servings,id } = props.food;

  return (
    <div>
      <p>{name}</p>
      <img src={image} alt={name} />
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      <p>
        <b>Total Calories: {servings * calories} kcal</b>
      </p>
      <button onClick={() => props.deleteFood(id)}>Delete</button>
    </div>
  );
}

export default FoodBox;
