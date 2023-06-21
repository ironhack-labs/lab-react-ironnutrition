import { Row, Card, Col, Button } from 'antd';

export function FoodBox(props) {
  return (
    <Col>
      <Card
        title={props.food.name}
        style={{
          justifyContent: 'center',
          width: 230,
          height: 320,
          margin: 10,
        }}
      >
        {props.food.image === '' ? (
          <img
            src="https://dummyimage.com/600x400/000/fff&text=No+image+available"
            height={60}
            alt="food"
          />
        ) : (
          <img src={props.food.image} height={60} alt="food" />
        )}
        <p>Calories: {props.food.calories}</p>
        <p>Servings: {props.food.servings}</p>
        <p>
          <b>Total Calories: </b>{' '}
          {props.food.servings * props.food.calories + ' '}
          kcal
        </p>

        <Row justify={'center'}>
          <Button
            danger
            type="primary danger"
            onClick={() => {
              props.deleteFood(props.food.name);
            }}
            style={{ marginBottom: '1rem' }}
          >
            {' '}
            Delete{' '}
          </Button>
        </Row>
      </Card>
    </Col>
  );
}
