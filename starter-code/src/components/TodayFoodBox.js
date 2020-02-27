import React, { Component } from "react";
import shortid from "shortid";

export default class TodayFoodBox extends Component {
  state = {
    id: this.props.food.id,
    name: this.props.food.name,
    calories: this.props.food.calories,
    image: this.props.food.image,
    quantity: this.props.food.quantity
  };

  handleChange = e => {
    let { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleDelete = (id) => {
    this.props.deleteTodaysFood(id)
  }

  handleSubmit = e => {
    e.preventDefault();

    const newTodayFood = this.state;
    // rewrites the Food ID
    //newTodayFood.id = shortid.generate();

    this.props.addTodayFood(newTodayFood);

    this.setState({
      id: this.props.food.id,
      name: this.props.food.name,
      calories: this.props.food.calories,
      image: this.props.food.image,
      quantity: this.props.food.quantity
    });
  };

  render() {
    return (
      <div className="box" key={this.state.id}>
        <article className="media">
          <div className="media-content">
            <div className="content">
              <p>
                <strong>
                  {this.state.quantity} unit(s) of {this.state.name}
                </strong>
                ,{" "}
                <small>
                  {this.state.calories}cal each - Total:{" "}
                  {this.state.quantity * this.state.calories}cal
                </small>
              </p>
            </div>
            <div className="control">
              <button className="button is-info" onClick={() => this.handleDelete(this.state.id)}>
                DELETE
              </button>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
