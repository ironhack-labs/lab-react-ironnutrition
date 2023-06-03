import { Card, Col, Button, Row } from 'antd';

function FoodBox(props) {
  const { foods, deleteFood } = props;

  return (
    <div className="food-box-container">
      <h1>Food list</h1>
      {Boolean(foods.length) && (
        <Row gutter={[16, 16]} justify="center">
          {foods.map((food) => (
            <Col span={8} key={food.name}>
              <Card title={food.name} className="food-card">
                <img src={food.image} className="food-image" alt="food" />
                <p>Calories: {food.calories}</p>
                <p>Servings: {food.servings}</p>
                <p>
                  <b>Total Calories: {food.calories * food.servings} </b> kcal
                </p>
                <Button type="primary" onClick={() => deleteFood(food.name)}>
                  Delete
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      {!Boolean(foods.length) && (
        <div>
          <p>Oops! There is no more content to show</p>
          <p className="zero-symbol">Ø</p>
        </div>
      )}
    </div>
  );
}

export default FoodBox;
