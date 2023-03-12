import Food from "../../foods.json"
import { FoodList } from "../../components/FoodList"

export const Home = () => {
  return (
    <div>
      <FoodList foods={Food}/>
    </div>
  )
}
