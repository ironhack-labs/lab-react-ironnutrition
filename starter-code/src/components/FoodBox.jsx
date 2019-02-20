import React, { Component } from "react";
import "./FoodBox.css";

class FoodBox extends Component {
  render() {
    return (
      <div>
      {this.props.foodsProp.map((e, idx)=> {
        return  <div key={idx} className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={e.image}/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{e.name}</strong> <br />
                <small>{e.calories}</small>
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
    })}
    </div>
    );
  }
}

export default FoodBox;
