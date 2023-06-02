import { Card, Col, Button } from 'antd';

function FoodBox(props) {
  const { name, image, calories, servings, onDelete } = props;
  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt={name} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button type="primary" onClick={onDelete}>
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
