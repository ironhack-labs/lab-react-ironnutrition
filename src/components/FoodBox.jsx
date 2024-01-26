function FoodBox(props) {
  
  function handleDelete() {
    const updatedFoods = props.foods.filter((eachFood) => eachFood.id !== props.food.id);
   props.setFoods(updatedFoods);
  }

    
  return (
    <div>
      <p>{props.food.name}</p>

      <img src={props.food.image} alt="" height={"100"}/>

      <p>Calories: {props.food.calories}</p>
      <p>Servings {props.food.servings}</p>

      <p>
        <b>
          Total Calories: {props.food.servings * props.food.calories}
        </b>
        kcal
      </p>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
export default FoodBox; 
