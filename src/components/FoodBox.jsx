import { Card, Col, Button } from 'antd';

// function uuid() {
//   return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (a) =>
//     (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
//   );
// }

export const FoodBox = ({ foodsList, searchString }) => {
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
              <Button type="primary"> Delete </Button>
            </Card>
          </Col>
        );
      })}
    </>
  );
};
