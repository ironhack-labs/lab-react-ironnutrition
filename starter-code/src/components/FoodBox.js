import React, { Component } from 'react';
import styled from "styled-components"
import { Card, Button, Accordion } from 'react-bootstrap';
import foodsArray from "../../src/foods"

const Block = styled.section`
  margin-left:100px;
  margin-top:38px;
  border: 1px solid red;
  width: 300px;
  height:140px;
  
`;


const BtnFormat = styled.section`
  padding: 10px 80px;
`;



class FoodBox extends Component {

  constructor() {
    super()
    this.state = { foods: foodsArray }


  }




  render() {
    console.log("This is the return Array of objects from the JSON", this.state.foods)

    return (

      this.state.foods.map((food, i) =>
        <Block key={i}>
          <div className="box">
            <Card style={{ width: '18rem' }}>
              <Card.Img style={{ width: 60, height: 50 }} variant="top" src={food.image} />
              <Card.Body>
                <Card.Title>{food.name} {food.quantity}</Card.Title>
                <Card.Text>{food.calories} calories</Card.Text>

                <BtnFormat>
                  <Button style={{ marginRight: 5 }} variant="primary">+</Button>
                  <Button style={{ marginRight: 5 }} variant="primary">-</Button>
                  <Button type="submit" value="Submit" variant="primary">Add New</Button>{' '}
                </BtnFormat>
              </Card.Body>
            </Card>
          </div >
        </Block>
      )
    );
  }
}

export default FoodBox;



{/* <article className="media">
<div className="media-left">
  <figure style={{ width: 60, height: 50 }} className="image is-64x64">
    <img style={{ float: "left", width: 60, height: 50 }} src="https://i.imgur.com/eTmWoAN.png" alt="food" />
  </figure>
</div>
<div className="media-content">
  <div className="content">
    <p style={{ height: 20 }} >
      <strong style={{ paddingLeft: 20 }}>Pizza</strong> <br />
      <small style={{ paddingLeft: 20 }}>400 cal</small>
    </p>
  </div>
</div>
<div className="media-right">
  <div className="field has-addons">
    <div className="control">
      <input style={{ float: "right", width: 20, height: 20 }}
        className="input"
        type="number"
        value="1"
      />
    </div>
    <div className="control">
      <button style={{ float: "right", width: 30, height: 30 }} className="button is-info">
        +
  </button>
    </div>
  </div>
</div>
</article> */}