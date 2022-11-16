
import AddFoodForum from "./AddFoodForum"

const NewFood = (props) => {

  const saveFoodHandler = (newFood) => {
    const foodData = {
      ...newFood,
      id: Math.random().toString()
    }
    console.log(foodData)

    props.onFoodData(foodData)
  }

  return (
    <div>
      <AddFoodForum onNewFood={saveFoodHandler} ></AddFoodForum>
    </div>
  )
}

export default NewFood