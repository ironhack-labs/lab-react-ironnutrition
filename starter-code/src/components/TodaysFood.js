import React, { Component } from "react";

class TodaysFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ""
    };
  }

  render() {
    return (
      <div>
        <h2 className="subtitle">Today's Foods</h2>
      </div>
    );
  } // end of render
}

export default TodaysFood;
