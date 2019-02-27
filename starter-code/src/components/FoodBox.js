import React, { Component } from 'react';

export default class FoodBox extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  onChangeCount = (event) => {
      this.setState({ count: event.target.value })
  }

  onAddToMenu = () => {
    this.props.onAddToMenu({ ...this.props.food, quantity: this.state.count });
  }

  render() {
    const { image, name, calories } = this.props.food;

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={this.state.count}
                  onChange={this.onChangeCount}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.onAddToMenu}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}