import { logDOM } from '@testing-library/react';
import React, { Component } from 'react';
import './styles/TodaysFood.css';

export default class TodaysFood extends Component {
  render() {
    const { foodInfo, onDelete } = this.props;

    return (
      <div className="todaysFood__container">
        <div className="todaysFood__texts">
          <p>{foodInfo.quantity} qty</p>
          <p>{foodInfo.name}</p>
          <p>{foodInfo.calories} cal</p>
        </div>
        <button
          onClick={() => {
            onDelete(foodInfo.name);
          }}
        >
          <a class="delete"></a>
        </button>
      </div>
    );
  }
}
