import './FoodCard.css';
import { DeleteOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
const { Meta } = Card;

function FoodCards({ foods, deleteFood }) {
  
    return (
      <Row>
          {
            foods.map((food) => (
              <Col span={5} key={food.name} className="FoodCard">
                  <Card
                  style={{
                      width: 300,
                  }}
                  cover={
                      <img
                      alt={food.name}
                      src={food.image}
                      />
                  }
                  actions={[
                    <DeleteOutlined key="delete" onClick={() => deleteFood(food.name)}/>
                  ]}
                  >
                  <Meta
                      title={food.name}
                      description={`Calories: ${food.calories}, Servings: ${food.servings}`}
                  />
                  </Card>
              </Col>
            ))
          }
      </Row>
    );
}

export default FoodCards