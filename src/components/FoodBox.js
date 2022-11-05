import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {

    const deleteFood = foodName => {
        const filteredFoods = props.allFoodForDelBtn.filter(food => {
            return food.name !== foodName
        })
        props.setFoodsForDelBtn(filteredFoods);
    }

  return (
    <Col>
{/* adding conditional display. that will filter out based on the search bar input */}

      <Card
        title={props.food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={props.food.image} height={60} alt="food" />
        <p>Calories: {props.food.calories}</p>
        <p>Servings: {props.food.servings}</p>
        <p>
          <b>Total Calories: {props.food.calories * props.food.servings} </b> kcal
        </p>
        <Button onClick={() => deleteFood(props.food.name)} type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;