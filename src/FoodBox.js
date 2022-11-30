import { Card, Row, Col, Button } from 'antd';

const FoodBox = ({ food, deleteItem }) => {
  return (
    <div>
      <Row >
        <Col>
          <Card title={food.name}>
            <img src={food.image} width={200} />
            <h2>Calories: {food.calories}</h2>
            <h2>Servings: {food.servings}</h2>
            <h2>
              <b>Total Calories: {food.calories * food.servings}</b>kcal
            </h2>
            <Button type="primary" onClick={() => deleteItem(food.name)}>Delete</Button>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default FoodBox;