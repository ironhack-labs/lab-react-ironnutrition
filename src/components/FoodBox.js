import { Card, Row, Button } from 'antd';

function FoodBox({ foods, setFoods }) {
  const deleteFood = (name) => {
    const newFood = foods.filter((food) => {
      return food.name !== name;
    });
    setFoods(newFood);
  };

  return (
    <Row>
      {foods.length > 0 ? (
        foods.map((food) => {
          return (
            <Card
              key={food.name}
              title={food.name}
              style={{ width: 230, height: 300, margin: 10 }}
            >
              <img src={food.image} height={60} alt="food" />
              <p>Calories: {food.calories}</p>
              <p>Servings: {food.servings}</p>
              <p>
                <b>Total Calories: {food.calories * food.servings} </b> kcal
              </p>
              <Button type="primary" onClick={() => deleteFood(food.name)}>
                Delete
              </Button>
            </Card>
          );
        })
      ) : (
        <div>Oppsss! There is no more content to show!</div>
      )}
    </Row>
  );
}

export default FoodBox;
