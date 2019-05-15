import React from "react";

class todaysFood extends React.Component {
  render() {
    return (
      <div className="todaysContainer">
        <h3>Today's Food</h3>
        {this.props.foods}
      </div>
    );
  }
}
export default todaysFood;
