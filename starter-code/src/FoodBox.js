import React, { Component } from 'react';


class FoodBox extends Component {
  state = {
    foods: this.props.foods,
  };

  // changeQuantity = e => {
  //   console.log(e.target, e.target.value);
  //   let foodsCopy = [...this.props.foods];
  //   foodsCopy.quantity++
  //   // console.log("value = ", foodsCopy[i].quantity);

  //   this.setState({
  //     foods: foodsCopy
  //   });
  // };

  // handleInputChange = e => {
  //   console.log("change", e, e.target.value);
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  foodItemBar = () => {
    return this.props.foods.map((food, i) => {
      return (
        <div className="box is-half" key={i}>
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img
                  src={this.props.foods[i].image}
                  alt={this.props.foods[i].name}
                />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.foods[i].name}</strong> <br />
                  <small>{this.props.foods[i].calories} cal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    placeholder={this.props.foods[i].quantity}
                    name={this.props.foods[i].name}
                    calories={this.props.foods[i].calories}
                    // onInput={(e) => this.props.addToList([i],e)}
                    onChange={this.props.addToList(
                      this.props.foods[i].calories
                    )}
                  />
                </div>
                <div className="control">
                  <button
                    className="button is-info"
                    onClick={() => this.props.addToList([i])}
                    key={i}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      );
    });
  };

  render() {
    return <div>{this.foodItemBar()}</div>;
  }
}

export default FoodBox;