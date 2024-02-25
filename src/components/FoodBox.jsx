import {Col, Card, Button} from "antd"

function FoodBox(props) {
  console.log(props);

  const handleRemoveFood = (indexToRemove) => {
    let currentListFoodClone = JSON.parse(JSON.stringify(props.foods))

    currentListFoodClone.splice(indexToRemove, 1)

    props.setFoods(currentListFoodClone);
  }

  return (
    <div>
      {props.foods.map((eachFood, index) => {
        return (
          <Col key={index}>
            <Card title={eachFood.name}>

            <img src={eachFood.image} alt="image" width="80px" />

            <p>Calories: {eachFood.calories}</p>
            <p>Servings {eachFood.servings}</p>

            <p>
              <b>Total Calories: {eachFood.servings * eachFood.calories} </b> kcal
            </p>

            <Button type="primary" onClick={() => handleRemoveFood(index)}>Delete</Button>
            
            </Card>
          </Col>
        );
      })}
    </div>
  );
}
export default FoodBox;
