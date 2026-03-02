import { Space, Card, Row, Col, Button, Empty, Typography } from "antd";
const { Text } = Typography;

const FoodBox = ({ food, handleDelete }) => {
  if (food.length === 0) {
    return <Empty description="No food to show" />;
  }

  return (
    <Row gutter={[16, 16]}>
      {food.map((foodItem) => (
        <Col key={foodItem.id} xs={24} sm={12} md={8} lg={6}>
          <Card title={foodItem.name} hoverable style={{ margin: "10px 0" }}>
            <Space direction="vertical" size="small">
              <img src={foodItem.image} alt={foodItem.name} height={60} />
              <Text>{foodItem.calories} cal</Text>
              <Text>{foodItem.servings} servings</Text>

              <Text>
                Total calories: {foodItem.calories * foodItem.servings} cal
              </Text>

              <Button
                type="primary"
                danger
                onClick={() => handleDelete(foodItem.id)}
              >
                Delete
              </Button>
            </Space>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default FoodBox;
