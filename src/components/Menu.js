import React, { Component } from 'react';


class Menu extends Component {

  state = {
     items: this.props.item  
  }

  render() {
    const {item} = this.props;
      return (
        <div>
            <p>✔ {item.quantity} {item.name} = {item.quantity * item.calories} Calories</p>
            <hr></hr>
      </div>
    )
  }
}

export default Menu;
