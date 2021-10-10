import React, { Component } from 'react';

export default class AddButton extends Component {
  state = {
    inputValue: 0,
  };

  onClickHandler = () => {
    this.props.addFoodToList(this.state.inputValue);
  };

  updateInputValue = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  render() {
    return (
      <div className='addButton'>
        <div className='field has-addons'>
          <div className='control'>
            <input
              className='input'
              type='number'
              min='0'
              value={this.state.inputValue}
              onChange={this.updateInputValue}
            />
          </div>
          <div className='control'>
            <button className='button is-info' onClick={this.onClickHandler}>
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}
