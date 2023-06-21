import { Card, Col, Button } from 'antd';

// {
//     "name": "Pizza",
//     "calories": 400,
//     "image": "https://i.imgur.com/eTmWoAN.png",
//     "servings": 1
//   },

export default function FoodBox({food, deleteFood}) {
    return (
        <Col>
          <Card
            title={food.name}
            style={{ width: 230, height: 300, margin: 10 }}
          >
            <img src={food.image} height={60} alt={food.name} />
            <p>Calories: {food.calories}</p>
            <p>Servings: <b>{food.servings}</b></p>
            <p>
              <b>Total Calories: {food.calories * food.servings}</b> kcal
            </p>
            <Button type="primary" onClick={() => deleteFood(food.name)}> Delete </Button>
          </Card>
        </Col>
      );
}