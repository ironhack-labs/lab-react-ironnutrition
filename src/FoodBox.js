import { Card, Col } from 'antd';


function FoodBox(props) {
    const {name, calories, image, servings} = props.food;
    const {random, food} = props;
    console.log(props)
    return (

        <Col> 
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10 }} >
      
          <img src={image} height={60} alt={name} />
          <p>Calories: {calories}</p>
          <p>Servings: {servings}</p>
          <p>
            <b>Total Calories: {calories*servings} </b> kcal
          </p>
          <button type="primary"> Delete </button>
        <p>{random}</p>
      </Card></Col>
    );
  }
  
  export default FoodBox;