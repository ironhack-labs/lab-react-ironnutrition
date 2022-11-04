import { Card, Col, Button } from 'antd';

function uuid() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (a) =>
    (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
  );
}

export const FoodBox = ({ foodList }) => {
  return (
    <Col>
      <Card
        title={foodList.name}
        style={{ width: 230, height: 330, margin: 10 }}
        id={uuid()}
      >
        <img id={uuid()} src={foodList.image} height={60} alt="food" />
        <p id={uuid()}>Calories: {foodList.calories}</p>
        <p id={uuid()}>Servings: {foodList.servings}</p>
        <p id={uuid()}>
          <b id={uuid()}>
            Total Calories: {foodList.calories * foodList.servings}
          </b>
          kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
};
