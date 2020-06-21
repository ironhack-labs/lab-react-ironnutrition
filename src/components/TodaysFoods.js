import React, { Component } from 'react';

class TodaysFoods extends Component {

  constructor(props) {
    debugger
    super(props);
    console.log(this.props.foods);
    
  }

  state={
    totalCalories:0
  }
  
    render() {
        return (
            <div className="column content">
            <h2 className="subtitle">Today's foods</h2>
            {
                this.props.foods.map((food)=>(
                  <ul>
                    <li>{food.name}</li>
                  </ul>
                ))
              }
            <strong>Total: {this.state.totalCalories} cal</strong>
          </div>
        );
    }
}

export default TodaysFoods;