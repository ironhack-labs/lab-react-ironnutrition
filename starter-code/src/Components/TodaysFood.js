import React from "react";

class TodaysFood extends React.Component {

  render() {
    return (
      <ul>
        {this.props.quantity} {this.props.name}
      </ul>

    )
  }
}

export default TodaysFood;