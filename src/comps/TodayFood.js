// imports
import React from 'react';

class TodayFood extends React.Component {
  render() {
    console.log(this.props.todayFood);
    return (
      <div className="App">
        <p>{this.props.todayFood.name}</p>
        <p>{this.props.todayFood.calories}</p>
        <p>{this.props.todayFood.quantity}</p>
      </div>
    );
  }
}

export default TodayFood;
