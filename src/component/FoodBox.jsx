import { Card, Col, Button } from "antd";

function FoodBox ({food}){

//const {food} = props
 return(
          <Col>
            <Card
              title={food.name}
              style={{ width: 230, height: 300, margin: 10 }}
            >
              <img src={food.image} alt="foodimage" height={60} />
              <p>Calories: {food.calories}</p>
              <p>Servings: {food.servings}</p>
              <p>
                <b>Total Calories: {food.calories} * {food.servings} </b>
              </p>
              <Button type="primary"> Delete </Button>
            </Card>
          </Col>

    )
}

export default FoodBox