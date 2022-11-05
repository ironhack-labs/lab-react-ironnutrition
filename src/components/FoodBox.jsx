import { Card, Col, Button } from 'antd';

export const FoodBox = ({ foodsList, searchString, handleDelete }) => {
  let filteredFoods = foodsList.filter((food) =>
    food.name.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <>
      {filteredFoods.map((food) => {
        return (
          <Col>
            <Card
              title={food.name}
              style={{ width: 230, height: 330, margin: 10 }}
            >
              <img src={food.image} height={60} alt="food" />
              <p>Calories: {food.calories}</p>
              <p>Servings: {food.servings}</p>
              <p>
                <b>Total Calories: {food.calories * food.servings}</b>
                kcal
              </p>
              <Button type="primary" onClick={handleDelete} id={food.id}>
                Delete
              </Button>
            </Card>
          </Col>
        );
      })}
    </>
  );
};
