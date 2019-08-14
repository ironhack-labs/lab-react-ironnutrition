import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foods: []
    }
  }


  render() {
    return (
      <React.Fragment>
        <h2>Today's Food</h2>

        {this.state.foods.map(elm => {
          return <li>{elm}</li>
        })}
      </React.Fragment>
    )
  }
}







export default List