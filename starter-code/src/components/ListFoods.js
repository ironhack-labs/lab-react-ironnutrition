import React, { Component } from "react";

class ListFoods extends Component {
  constructor(props) {
    
    // sin presencia del método super(), this retornará undefined. Es obligatorio.
    super(props);
    this.props = props
    this.state = {
      quantity: 1,
      
    }
  }


   handleChange = (e) => {
      let { value } = e.target
      this.setState({ quantity: value })
    }


  render() {
    
    return (
          <li>{this.props.quantity} {this.props.name} = ({this.props.calories} * {this.props.quantity}) </li>
    );
  }
}

export default ListFoods;