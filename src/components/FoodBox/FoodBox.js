import React, { Component } from 'react';

export default class FoodBox extends Component {
  state = {
    count: 1,
  };

  handleClick = () => {
    const { name, calories, addFoodToday } = this.props;
    addFoodToday(name, calories, this.state.count);
  };

  render() {
    const { name, calories, image, eliminateFood } = this.props;

    return (
      <div className="column">
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
                    onChange={(e) => this.setState({ count: e.target.value })}
                  />
                </div>
                <div className="control">
                  <button
                    className="button is-info"
                    onClick={() => this.handleClick()}
                  >
                    +
                  </button>
                </div>
                <div className="control">
                  <button onClick={() => eliminateFood(name)} class="button is-danger is-outlined">
                    <span>Delete</span>
                    <span class="icon is-small">
                      <i class="fas fa-times"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
