import { Button, Card, Col } from "antd"

function FoodBox({ name, calories, image, servings}) {
  return(
    <Col>
      <Card
        title={name}
        style={{width: 230, height: 300, margin: 10}}
      >
        <img src={image} height={60} alt={name} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: { calories * servings }</b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  )
}

export default FoodBox