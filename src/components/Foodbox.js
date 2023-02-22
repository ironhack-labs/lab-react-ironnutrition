import { Card, Col, Button } from 'antd';

function Foodbox(props) {
  console.log(props);

  function handleDelete(name) {
    props.onDelete(name);
  }

  return (
    <div class="foodbox">
      <Col>
        <Card
          title={props.food.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={props.food.image} height={60} alt="food" />
          <p>
            Calories: {props.food.calories}
            kcal
          </p>
          <p>Servings: {props.food.servings}</p>
          <p>
            <b>Total Calories: {props.food.calories * props.food.servings} </b>
            kcal
          </p>
          <Button type="primary" onClick={() => handleDelete(props.food.name)}>
            {' '}
            Delete{' '}
          </Button>
        </Card>
      </Col>
    </div>
  );
}
export default Foodbox;
