import React, { Component } from 'react'
import Food from "./Food";
import FormFood from "./FormFood";

export default class Foodbox extends Component {
    render() {
        return (
            <div>
{this.props.foods.map((f, i) => (
    <Food
      key={i}
      name={f.name}
      calories={f.calories}
      image={f.image}
      quantity={f.quantity}
    />
  ))}
</div>
         ) }}
