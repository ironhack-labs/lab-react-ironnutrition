import { Col, Card, Button } from 'antd'
import { useState } from 'react'


function FoodBox ({ food, listOfFood, setListOfFood, index }) {

  function deleteItems(i) {
    const updatedList = [...listOfFood]
    updatedList.splice(i, 1)

    setListOfFood(updatedList)
  }
  

  return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt={food.name} />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button onClick={() => deleteItems(index)} type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}


export default FoodBox