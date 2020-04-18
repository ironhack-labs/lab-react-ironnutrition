import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class TodayFood extends Component {
  handleDelete = () => {
    const { click, index } = this.props;
    click(index)
  }


  render(){
    const { name, calories, quantity, index } = this.props;
    return (<li>{quantity} {name} = {calories} <button className="button is-warning" onClick={this.handleDelete}>Delete </button></li>)
  }
}

export default TodayFood;