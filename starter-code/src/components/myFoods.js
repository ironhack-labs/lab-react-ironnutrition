import React, { Component } from 'react';

class MyFoods extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='my-foods-list'>
        <li>{this.props.quantity} {this.props.name} = {this.props.calories} cal</li>
        <button className="button is-danger is-small is-rounded delete-button" type="submit" onClick={ this.props.removeFromMyFoods}>RemoveFromMyFoods
        </button>
      </div>
    )
  }
}

export default MyFoods;

