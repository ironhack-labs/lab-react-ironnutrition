import { Card, Col, Button, Row } from 'antd';
import { useState } from 'react';

function FoodBox(props) {

    const generateKey = (name) => {
        const randomNum = Math.floor(Math.random() * 100000);
        return `${name}-${randomNum}`;
    };

    const [foods, setFoods] = useState(() => {
        return props.foods.map((food) => ({
        ...food,
        key: generateKey(food.name),
        }));
    });

    const handleDeleteFood = (foodId) => {
        console.log(foodId)
        const updatedFoods = foods.filter(food => food.key !== foodId);
        setFoods(updatedFoods);
    };



  return (
    <div className="food-box-container">
      <h1>Food list</h1>
      <Row gutter={[16, 16]} justify="center">
        {foods.map((food) => (
          <Col span={8} key={food.key}>
            <Card title={food.name} className="food-card">
              <img src={food.image} className="food-image" alt="food" />
              <p>Calories: {food.calories}</p>
              <p>Servings: {food.servings}</p>
              <p>
                <b>Total Calories: {food.calories * food.servings} </b> kcal
              </p>
              <Button type="primary" onClick={() => handleDeleteFood(food.key)}>
                Delete
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default FoodBox;
