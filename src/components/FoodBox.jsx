// Your code here

import { Card, Row, Col, Divider, Input, Button } from "antd";

function FoodBox({ id, name, calories, image, servings, handleDelete }) {
  return (
    <Col>
    <Card 
      title={name} style={{ width: 230, height: 300, margin: 10, textAlign: "left" }}>

      <img src={image} alt={name} height={50} />

      <p>Calories: {calories} </p>
      <p>Servings {servings} </p>

      <p>
        <b>Total Calories: {servings * calories} </b> kcal
      </p>

      <button type="primary" style={{ backgroundColor: "royalblue", borderColor: "royalblue", color: "white", borderRadius: "0", marginBottom: "20px"}} onClick={() => handleDelete(id)}>Delete</button>
      </Card>
    </Col>
  );
}

export default FoodBox;
