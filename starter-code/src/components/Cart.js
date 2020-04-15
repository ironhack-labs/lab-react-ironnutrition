import React, {Component} from 'react';

class Cart extends Component {
  render() {
    const {cartItems, removeCartItem} = this.props;
    return (
      <React.Fragment>
        <h2 className="subtitle">Today's foods</h2>
        <ul>
          {
            cartItems.map((el, index) => {
              return <li key={index}>{el.quantity} {el.name} = {el.calories} cal <button onClick={() => removeCartItem(el.name)} className={'button'}>Delete</button></li>
            })
          }
        </ul>
        <strong>Total: {cartItems.reduce((acc, el) => (el.calories * el.quantity) + acc, 0)} cal</strong>
      </React.Fragment>
    );
  }
}

export default Cart;