


function FoodBox({food, deleteFood}) {
    
  const {name, image, calories, servings, id} = food

  return (
    <div>
      <p>{name}</p>
      <img src={image} alt={name} height='85'/>

      <p>Calories: {calories}</p>
      <p>Servings {servings}</p>
      <p>
        <b>Total calories: {servings * calories} kcal</b>
      </p>
      <button onClick={() => {deleteFood(id)}}>Delete</button>
    </div>
  )
}

export default FoodBox
