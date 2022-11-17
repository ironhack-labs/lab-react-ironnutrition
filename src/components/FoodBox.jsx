
const FoodBox = (props) => {
const { food, deleteFoodHandler } = props



return (<div>
        <p>{food.name}</p>
        <img src={food.image} width={100} alt=""/>
        <p>Calories:{food.calories}</p>
        <p>Servings:<b>{food.servings}</b></p>
        <button onClick={() => deleteFoodHandler(food.name)}>Delete</button>
      </div> 
)
}
export default FoodBox