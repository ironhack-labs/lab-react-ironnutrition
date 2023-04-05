import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({ food, setFoodsList, elmIndex }) {
  const deleteFood = (e) => {
    e.preventDefault();
    console.log(elmIndex);
    setFoodsList((oldList) => {
      console.log(oldList);
      const newList = [...oldList];
      newList.splice(elmIndex, 1);
      return newList;
    });
  };
  return (
    <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
      <img src={food.image} height={60} alt="food" />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>
        <b>Total Calories: {food.calories * food.servings}</b> kcal
      </p>
      <Button onClick={deleteFood} type="primary">
        {' '}
        Delete{' '}
      </Button>
    </Card>
  );
}

export default FoodBox;
