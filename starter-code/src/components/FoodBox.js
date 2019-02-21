import React, { Component } from "react";

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsToAdd: 1
    };
  }

  syncStateForm(event) {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  addToDayList(nTimes) {
    const { food } = this.props;

    // convert input value to number and create an array (i.e 10 pizzas)
    nTimes = parseInt(nTimes, 10);
    var foodToAdd = new Array(nTimes).fill(food);
    console.log(
      "adding",
      nTimes,
      food.name,
      "like so",
      foodToAdd,
      "(sending from Foodbox)"
    );

    this.props.addedFood(foodToAdd);
  }

  render() {
    const { food } = this.props;
    const { itemsToAdd } = this.state;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} alt={food.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small> {food.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  name="itemsToAdd"
                  className="input"
                  type="number"
                  value={itemsToAdd}
                  onChange={event => this.syncStateForm(event)}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={this.addToDayList.bind(this, itemsToAdd)}
                >
                  {/* NOT sure I got why.. bind the function to this specific foodbox key bind(thisFoodBox) ? */}
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

export default FoodBox;
