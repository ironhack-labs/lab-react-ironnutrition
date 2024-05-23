

// Your code here
const FoodBox = ({food, allFoodsList, setAllFoods}) => {
const deleteFoods = (food) => {
  let filteredFoods = allFoodsList.filter((foodItem) => {
    return foodItem.name !== food.name
  })
  setAllFoods(filteredFoods)
}
    return (
  <div>
  <p>{food.name}</p>

  <img src={food.image} alt={food.name} height={300} />

  <p>Calories: {food.calories}</p>
  <p>Servings: {food.servings}</p>

  <p>
    <b>Total Calories: {food.calories * food.servings} </b> kcal
  </p>

  <button onClick={() => deleteFoods(food)} >Delete</button>
</div>
    )
}
export default FoodBox