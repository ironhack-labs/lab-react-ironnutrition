import "./../App.css";
import { Card, Button,Divider} from "antd";
import "./AddFoodForm";
function FoodBox ({foods, deleteButton}) {

return (




<div className="food-box">
<div id = "list">
<h3> Food List </h3>
<Divider> </Divider>
</div>
{foods.map((food)=> {
    return (
    <Card className="food-container">
   <div id = "food-name">
    <p> <b> {food.name}</b></p>
    </div>
    <img id ="foods-pic" src = {food.image} alt = "food-pic"/>
    <p> <b> Total calories:</b>  {food.calories} kcal</p>
    <p> Servings: <b>{food.servings}  </b></p>
    <Button onClick={()=>deleteButton(food.name)}  id = "delete-btn"> Delete </Button>
    </Card>
    )
})}


</div>
)

}


export default FoodBox;