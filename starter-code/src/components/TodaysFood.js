import React, { Component } from "react";

class TodaysFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ""
    };
  }

  render() {
    const { item } = this.props;

    return (
      <div>
        {item.map((oneFood, index) => {
          return <li key={index}>{oneFood.name}</li>;
        })}
      </div>
    );
  } // end of render
}

export default TodaysFood;
