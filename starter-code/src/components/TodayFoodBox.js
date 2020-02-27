import React, { Component } from "react";
import shortid from "shortid";

export default class TodayFoodBox extends Component {
    

  handleDelete = (id) => {
    this.props.deleteTodaysFood(id)
  }

  render() {
    return (
      <div className="box" key={this.props.food.id}>
        <article className="media">
          <div className="media-content">
            <div className="content">
              <p>
                <strong>
                  {this.props.food.quantity} unit(s) of {this.props.food.name}
                </strong>
                ,{" "}
                <small>
                  {this.props.food.calories}cal each - Total:{" "}
                  {this.props.food.quantity * this.props.food.calories}cal
                </small>
              </p>
            </div>
            <div className="control">
              <button className="button is-info" onClick={() => this.handleDelete(this.props.food.id)}>
                DELETE
              </button>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
