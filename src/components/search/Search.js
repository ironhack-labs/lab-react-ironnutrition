import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  state = {
    inputValue: '',
  };

  onInputChangeHandler = (event) => {
    const { name, value } = event.target;
    const { allTheFoods } = this.props;

    this.setState(
      {
        [name]: value,
      },
      () => {
        const filteredList = allTheFoods.filter((food) =>
          food.name.toLowerCase().includes(this.state.inputValue.toLowerCase())
        );
        this.props.onChangeSearchHandler(filteredList);
      }
    );
  };

  render() {
    return (
      <div className='search-contianer'>
        <input
          name='inputValue'
          value={this.state.inputValue}
          onChange={this.onInputChangeHandler}
          placeholder='Search for food...'
        />
      </div>
    );
  }
}
