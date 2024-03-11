// Your code here
import React from 'react'
import { Card, Col, Button } from "antd";

const FoodBox = ({ id, name, calories, image, servings, onClick }) => {
  return (
    <div>
    <Col className='food-style'>
      <Card  title={name} style={{ width: 230, height: 300, margin: 10 }}>


        <img src={image} height={60} alt='' />

        <p>Calories:{calories} </p>
        <p>Servings {servings}</p>
        <p>
          <b>Total Calories: {servings} * {calories} </b> kcal
        </p>

        <Button type='primary' onClick={() => {
          onClick(id)
        }}
        >Delete
        </Button>
      </Card>
    </Col>
    </div>
  )
}
export default FoodBox






