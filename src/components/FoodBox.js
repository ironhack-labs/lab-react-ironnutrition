import { Card, Col, Button } from 'antd'
// Iteration 2
function FoodBox(props) {
  const filteredMeals = props.meals.filter(meal => {
    return meal.name.toLowerCase().includes(props.queryProp.toLowerCase())
  })
  return (
<>
    {filteredMeals.map(meal => (    
        <Col>
          <Card
            title={meal.name}
            style={{ width: 300, height: 500, margin: 5 }}
          >
            <Card>
              <img src={meal.image} alt={meal.name} height="170" width="220"></img>
              <p>Calories: {meal.calories}</p>
              <p>Servings: {meal.servings}</p>
              <p>
                <b>Total Calories: {meal.calories * meal.servings}</b> kcal
              </p>
            </Card>
            <Button onClick={() => props.deleteFoodProp(meal.name)} type="primary"> Delete </Button>
          </Card>
        </Col>
    ))}
    </>
  )
}

export default FoodBox;