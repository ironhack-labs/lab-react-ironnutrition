// Css imports
import { Card, Col, Button } from 'antd';

function FoodBox(props) {
  const { name, image, calories, servings } = props.eachItem;
  const {listDelete} = props
  // console.log(listDelete);

  const deleteCard = (event) => {
    console.log(event.target)
    // const filteredList = listDelete.filter((eachCard) => {
    //   if (eachCard === event.target){
    //     return false
    //   }else return true
    // })
  }

  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button onClick={deleteCard}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
