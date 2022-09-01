import { Card, Col, Button } from 'antd';


function FoodBox ({ food, foods, setFoods }) {
  function handleDelete(name) {
    let filterFood = foods.filter((food) => {
      return food.name !== name;
    });

    setFoods(filterFood);
  }

    return (
        <Col>
          <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }} >
            <img src={food.image} height={60} alt="food" />
            <p>Calories: {food.calories}</p>
            <p>servings: {food.servings}</p>
            <p>
            <b>Total Calories: {food.calories * food.servings} </b> kcal
            </p>
            <Button type="primary" onClick={() => handleDelete(food.name)}>
              {' '}
              Delete{' '}
              </Button>
         </Card>
        </Col>
    );
}

export default FoodBox;
            
           
    