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
        if (this.state.inputValue.length === 0) {
          this.props.onChangeSearchHandler(allTheFoods);
        } else {
          const filteredList = allTheFoods.filter((food) =>
            food.name.includes(this.state.inputValue)
          );
          this.props.onChangeSearchHandler(filteredList);
        }
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
        />
      </div>
    );
  }
}
