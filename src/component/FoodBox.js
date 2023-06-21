import { Card, Col, Button } from 'antd';

function FoodBox(props){
    return(
        <Col key={new Date().getTime().toString(36)}>
      <Card
        title={props.oneFood.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={props.oneFood.image} height={60} alt="food" />
        <p>Calories: {props.oneFood.calories}</p>
        <p>Servings: {props.oneFood.servings}</p>
        <p>
          <b>Total Calories: {props.oneFood.calories * props.oneFood.servings} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
    )
}

export default FoodBox;