import React from "react";

export default class TodaysFood extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  // console.log("is this prop number" + this.state.key);

  deleteFood = (i) => {
    console.log('i',i)
    this.props.deleteOneMethod(i);
  }
  render (){
  return (
    <li>
      {this.props.thetodayFood.quantity > 0 && <span>{this.props.thetodayFood.quantity} {this.props.thetodayFood.name} = {this.props.thetodayFood.calories}</span>}
      <span><button onClick= {()=>{this.deleteFood(this.props.index)}} className="button delete-btn is-danger is-small">Delete</button></span>
    </li>
  )
}
}

