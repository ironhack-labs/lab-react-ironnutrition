import React from "react";
import "./FoodBox.css";

export default class FoodBox extends React.Component {
  render() {
    return (
      <body>
        {this.props.foodListProp.map((e, idx) => {
          return (
            <div key={idx} className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src={e.image} />
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
                      <input
                        className="input"
                        type="number"
                        value={e.quantity}
                      />
                    </div>
                    <div className="control">
                      <button className="button is-info">+</button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </body>
    );
  }
}
