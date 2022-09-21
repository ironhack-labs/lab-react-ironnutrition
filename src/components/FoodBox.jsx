function FoodBox(props) {
  const {food} = props
  const {deleteFood} = props;

  const handleDelete = (event) => {
    event.preventDefault()
    console.log(food.name)
    deleteFood(food.name)
  }
  
  return (
    <div className="foodbox">
      <span>{food.name}</span>
      <img src={food.image} alt="" />
      <span>Calories: {food.calories}</span>
      <span>Servings: {food.servings}</span>
      <span>Total calories: {food.calories * food.servings}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default FoodBox;