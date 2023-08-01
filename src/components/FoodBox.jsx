import { Card, Col, Button} from 'antd';

function FoodBox(props) {
  const { food: { name, calories, servings, image} } = props
  
  return (
    <Col
      className="FoodBox"
      span={8}
      style={{ justifyContent: 'center', display: 'flex' }}
    >
      <Card title={name} style={{ width: 230, height: 320, margin: 10, padding: 0}}>
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button type="primary" onClick={() => props.deleteFood(name)}>
          Delete
        </Button>
      </Card>
    </Col>
  )
}

export default FoodBox;
