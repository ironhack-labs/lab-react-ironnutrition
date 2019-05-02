import React, { Component } from 'react'

export default class FoodList extends Component {
  render() {
    return (
      <div>
           <ul>
              {menu.map((food, idx) => {
                return (
                  <li>
                    {food.quantity} {food.name} - {food.calories}
                    <a onClick={(idx) => this.removeFood(idx)}> X </a>
                  </li>
                );
              })}
            </ul>
        
      </div>
    )
  }
}
