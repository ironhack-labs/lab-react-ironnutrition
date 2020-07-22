import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Searchbar from './Searchbar';

export default class Foodbox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    };
  }

  filter = text => {
    this.setState({ filter: text });
  };

  render() {

    const filteredArr = this.props.foodList.foodList.filter(el => { return el.name.includes(this.state.filter)})

    const myFood = filteredArr.map(item => (
      <div className="box" key={item.name}>
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={item.image} alt="Food" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{item.name}</strong> <br />
                <small>{item.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" placeholder="0" />
              </div>
              <div className="control">
                <button className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    ));

    return (
      <div className="container">
        <Searchbar callback={this.filter} />
        <NavLink to="/add" className="button is-info mb-5">
          Add food
        </NavLink>
        {myFood}
      </div>
    );
  }
}
