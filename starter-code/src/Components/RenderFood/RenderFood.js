import React, { Component } from "react";

class RenderFood extends Component {
  render() {
    return (
      <div>
        {this.props.list.map((item, index) => {
          return (
            <div className="box" key={index}>
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img alt={item.name} src={item.image} />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{item.name}</strong> <br />
                      <small>{item.calories}</small>
                    </p>
                  </div>
                </div>
                <div className="media-right">
                  <div className="field has-addons">
                    <div className="control">
                      <input className="input" type="number" placeholder="1" />
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
      </div>
    );
  }
}

export default RenderFood;
