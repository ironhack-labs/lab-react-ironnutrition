import { Card, Col, Button } from 'antd';
function FoodBox({
  name,
  calories,
  image,
  servings,
  updateList,
  updateFilter,
}) {
  const deleteHandler = (name) => {
    updateFilter((prevState) => {
      return [...prevState].filter((food) => food.name !== name);
    });
    updateList((prevState) => {
      return [...prevState].filter((food) => food.name !== name);
    });
  };
  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 320, margin: 10 }}>
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button onClick={() => deleteHandler(name)} type="primary">
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
