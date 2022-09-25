import { Card, Col, Button } from 'antd';

function FoodBox({ food: { name, calories, image, servings }, deleteFood }) {
  return (
    <div>
      <Col>
        <Card key={name} title={name}>
          <img
            src={image}
            alt="food-img"
            width={80}
            style={{ display: 'flex', textAlign: 'left' }}
          />
          <p style={{ display: 'flex', textAlign: 'left' }}>
            Calories: {calories}
          </p>
          <p style={{ display: 'flex', textAlign: 'left' }}>
            Servings: {servings}
          </p>
          <p style={{ display: 'flex', textAlign: 'left' }}>
            <b>Total Calories: {calories * servings} kcal</b>
          </p>
          <Button type="primary" onClick={() => deleteFood(name)}>
            Delete
          </Button>
        </Card>
      </Col>
    </div>
  );
}

export default FoodBox;
