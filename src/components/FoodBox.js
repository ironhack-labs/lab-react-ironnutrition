import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {
  return (
    <>
      {props.listOfFood.map((foodObj, index) => {
        return (
          <Col>
            <Card
              title={foodObj.name}
              style={{ width: 230, height: 300, margin: 10 }}
            >
              <img src={foodObj.image} height={60} alt="food" />
              <p>Calories: {foodObj.calories}</p>
              <p>Servings: {foodObj.servings}</p>
              <p>
                <b>Total Calories: {foodObj.calories * foodObj.servings}</b>
                kcal
              </p>
              <Button
                key={index}
                onClick={() => {
                  props.callbackToDelete(foodObj.name);
                }}
                type="primary"
              >
                {' '}
                Delete{' '}
              </Button>
            </Card>
          </Col>
        );
      })}
    </>
  );
}

export default FoodBox;
