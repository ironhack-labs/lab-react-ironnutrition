import React from 'react';
import FormNewProduct from './FormNewProduct';

export default class NewProduct extends React.Component {
  state = {
    isVisible: false,
  };

  handleClick = () => {
    this.setState((oldState) => ({
      isVisible: !oldState.isVisible,
    }));
  };

  render() {
    return (
      <div className="formAddProduct">
        <button
          onClick={this.handleClick}
          className={
            !this.state.isVisible
              ? 'button is-primary my-3'
              : 'button is-danger my-3'
          }
        >
          {!this.state.isVisible ? '+ Add new food' : 'X Close'}
        </button>
        {this.state.isVisible && (
          <div className="container">
            <h1 className="title">New product</h1>
            <FormNewProduct setNewFood={this.props.setNewFood} />
          </div>
        )}
      </div>
    );
  }
}
