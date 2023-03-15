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
  
        <Card className="food-container">
    <div id = "food-name">
        <p> <b> {foods.name}</b></p>
    </div>
    <img id ="foods-pic" src = {foods.image} alt = "food-pic"/>
    <p> 
        <b>Total calories:</b>  {foods.calories} kcal
    </p>
    <p>
         Servings: <b>{foods.servings}</b>
    </p>
        <Button onClick={()=>deleteButton(foods.name)}  id = "delete-btn"> Delete </Button>
        </Card>

</div>
)

}


export default FoodBox;