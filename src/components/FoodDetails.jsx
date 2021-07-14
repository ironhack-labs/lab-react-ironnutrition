import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class FoodDetails extends Component {
  state = {
    count: 1,
  };

  clickHandler = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    const { food, handleTotalFood } = this.props;
    const { count } = this.state;

    return (
      <>
        <form
          onSubmit={(event) => {
            handleTotalFood(event, food, count);
            console.log(event);
          }}
          className="box"
        >
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={food.image} alt="foodpic" />
              </figure>
            </div>
            <div className="media-content">
              <strong name="name">{food.name}</strong>
              <br />
              <small name="calories">{food.calories}</small>
            </div>

            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    onClick={this.clickHandler}
                    name="quantity"
                    className="input"
                    type="number"
                    value={count}
                  />
                </div>
                <div className="control">
                  <button type="submit" className="button is-info">
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </form>
      </>
    );
  }
}

export default FoodDetails;
