import React, { Component } from 'react';

class TodaysFood extends Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <div className="todays-container">
        <h1 className="page-title">Today's Food</h1>
        <ul className="todays-items">
          {this.props.todaysFood.map((el, idx) => 
              <div><li key={idx}><span>{el.quantity} {el.name} = {el.calories} calories</span><a className="delete" onClick={() => this.props.deleteTodaysHandler(idx)}></a></li></div>)}
          
        </ul>
        {(this.props.todaysFood.length >= 1) ?
          <p><strong>Total:</strong> {this.props.todaysFood.reduce((total, current) => total + current.calories, 0)} calories.</p> :
          ''
          }
        
      </div>
    )
  }
}

export default TodaysFood;
