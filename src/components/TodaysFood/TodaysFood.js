import React from 'react';

class TodaysFood extends React.Component {
  //   state = {
  //     foods: this.props.foodObjs,
  //   };

  render() {
    return (
      <div>
        <h1>Today's foods</h1>
        <p>{this.props.foodObj.name}</p>
        <p>{this.props.foodObj.calories}</p>
      </div>
    );
  }
}

export default TodaysFood;
