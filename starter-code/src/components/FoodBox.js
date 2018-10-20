import React, { Component } from "react";
import "bulma/css/bulma.css";

class FoodBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.meal.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.meal.name}</strong> <br />
                <small>{this.props.meal.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value="1" />
              </div>
              <div className="control">
                <button className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
      /*<tr>
          <td><img src={this.props.celeb.pictureUrl} width="50px"></img></td>
          <td>{this.props.celeb.name} - {this.isEven(this.props.celeb.name)}</td>
          <td>{this.props.celeb.popularity}</td>
          <td><button onClick={() => this.props.clickDelete(this.props.celeb.name)}>Delete</button></td>
        </tr> */
    );
  }
}

export default FoodBox;