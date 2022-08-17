// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Card, Col, Button } from 'antd';


// Iteration 2
function FoodBox(props) {
  return (
    <Col>  
      <Card
        title={'Orange'}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={"https://i.imgur.com/abKGOcv.jpg"} height={60} alt="food" />
        <p>Calories: {85}</p>
        <p>Servings: {1}</p>
        <p>
          <b>Total Calories: FOOD_CALORIES * FOOD_SERVINGS </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
