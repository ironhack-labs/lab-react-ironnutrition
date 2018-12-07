import React, { Component } from 'react';

class FoodyOfToday extends Component {
  render() { 
    return ( 
      <div>
       {this.props.name}, {this.props.quantity}, {this.props.calories * this.props.quantity} cal
      </div>
     );
  }
}
 
export default FoodyOfToday;