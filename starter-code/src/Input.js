import React from "react";

// import "./Input.css";
export default class Input extends React.Component {


  render() {
    return (
      <input
      type="text"
      className="input search-bar"
      name="search"
      placeholder="Search"
      onChange={e => this.props.function(e)}
      />
    );
  }
}
