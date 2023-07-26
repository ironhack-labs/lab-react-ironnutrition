import { Card, Col, Button, Row } from 'antd';

function FoodBox(props) {
  const { food: { name, calories, servings, image, id } } = props
  console.log(id)
  
  return (
    <Col className="FoodBox" span={8} style={{justifyContent: 'center', display: 'flex'}}>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <div className="delete-btn-container">
          <Button className="delete-food-btn" type="primary">
            {' '}
            Delete{' '}
          </Button>
        </div>
      </Card>
    </Col>
  );
}

export default FoodBox;
