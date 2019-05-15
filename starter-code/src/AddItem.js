import React, { Component } from "react";

class AddItem extends Component {

 



  showListOfAddedItems = e => {
    return this.props.boughtFoods.map(eachFood => {
      return (
        <div>
      <li>{eachFood.quantity} Name: {eachFood.name} - {eachFood.calories} cal</li>
      
        
      
      </div>
      )
    })
  };

  render() {
    return (
      <div>
        <h1><strong>TODAY'S FOOD: </strong></h1>
        {this.showListOfAddedItems()}
      </div>
    );
  }
}

export default AddItem;
