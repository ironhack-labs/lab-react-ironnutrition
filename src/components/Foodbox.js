// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Row, Divider, Button, Col, Card } from 'antd';

function FoodBox(props) {
    return (
      <Col>
        <Card
          title={props.foodDetails.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={props.foodDetails.image} height={60} alt="food" />
          <p>Calories: {props.foodDetails.calories}</p>
          <p>Servings: {props.foodDetails.servings}</p>
          <p>
            <b>Total Calories: {props.foodDetails.calories * props.foodDetails.servings} </b> kcal
          </p>
          <Button type="primary"> Delete </Button>
        </Card>
      </Col>
    );
  }
  
  export default FoodBox;