import React, { Component } from "react";
import "bulma/css/bulma.css";

class MyList extends Component {
  render() {
    return (
      <div>
        <li>
          {this.props.name} - {this.props.calories} cal
        </li>
      </div>
    );
  }
}

export default MyList;
