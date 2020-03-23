import React from "react";

class FoodBox extends React.Component {
  render() {
    // const {name, calories, image, quatity} = this.props
    const {
      eachFood: { name, calories, image }
    } = this.props;
    //Here I'm using props because in the App.js in <FoodBox /> I'm passing property using map method
    return (
      <article className="box media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt={name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value="0" />
            </div>
            <div className="control">
              <button className="button is-info">+</button>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default FoodBox;
