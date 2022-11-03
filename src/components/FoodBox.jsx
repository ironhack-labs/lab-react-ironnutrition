import { Card, Col, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

function FoodBox({ food, handleClickDelete }) {
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, margin: 10 }}>
        <img
          src={food.image}
          height={100}
          alt={food.name}
          style={{ marginBottom: '50px' }}
        />
        <div
          style={{
            marginBottom: '40px',
          }}
        >
          <p>Calories: {food.calories}</p>
          <p>Servings: {food.servings}</p>
          <p>
            <b>Total Calories: {food.calories * food.servings} </b> kcal
          </p>
        </div>
        <Button
          style={{
            margin: '10px',
            position: 'absolute',
            right: '0',
            bottom: '0',
          }}
          onClick={() => {
            handleClickDelete(food.id);
          }}
          type="primary"
          danger
          icon={<DeleteOutlined />}
        >
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
