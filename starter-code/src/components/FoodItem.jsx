import React from "react";

class FoodItem extends React.Component {
  render() {
    return (
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={this.props.image} alt="Food"/>
          </figure>
        </div>

        <div className="media-content">
          <div className="content">
            <p>
              <strong>{this.props.name}</strong> <br />
              <small>{this.props.calories}</small>
            </p>
          </div>
        </div>

        <div className="media-right">
          <div className="field has-addons">
            {/* <div className="control">
              <input
                className="input"
                type="number"
                value="1"
              />
            </div> */}
            {/* <div className="control">
              <button className="button is-info">+</button>
            </div> */}
          </div>
        </div>

      </article>
    )
  }
}

export default FoodItem;
