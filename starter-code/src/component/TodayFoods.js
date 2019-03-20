import React, { Component } from 'react';

class TodayFoods extends Component {

  render() {
    const {foods} = this.props;
    return (
      <div>
        <ul>
          {foods.map((item, index) => {
           return <li key={index}>
                    {item.quantity} {item.name} {item.calories * Number(item.quantity)}
                  </li>
          })}
        </ul>
        <h2>Total: {foods && foods.reduce((acc,next) => {
          console.log(next.calories)
          console.log(next.quantity)
          return acc + (next.calories * Number(next.quantity))
         },0)}</h2>
      </div>
    );
  }
}

export default TodayFoods;