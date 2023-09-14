import { Card, Row, Col, Divider, Input, Button } from "antd";

function FoodBox(props) {
  return (
    <>
      <Row>
        {props.foodsToDisplay.map((food) => (
          <div className="card" key={food.id}>
            <Col>
              <Card>
                <p>{food.name}</p>
                <Divider></Divider>
                <div className="image-container">
                  <img src={food.image} alt={food.name} />
                </div>
                <p>Calories: {food.calories}</p>
                <p>Servings: {food.servings}</p>
                <p>
                  <b>Total Calories: {food.servings * food.calories} </b> kcal
                </p>
                <Button onClick={() => props.callbackToDelete(food.id)}>
                  Delete
                </Button>
              </Card>
            </Col>
          </div>
        ))}
      </Row>
    </>
  );
}

export default FoodBox;
