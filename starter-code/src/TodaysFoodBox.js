import React from "react";

class TodaysFoodBox extends React.Component {
  state = {};
  render() {
    return (
      <div key={this.props.foods.key} className="box FoodContainer">
        <div className="">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.foods.image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.foods.name}</strong> <br />
                  <small>{this.props.foods.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons" />
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default TodaysFoodBox;
