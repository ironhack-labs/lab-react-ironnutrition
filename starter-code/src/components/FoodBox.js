import React, { Component } from "react";

class FoodBox extends Component {
  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img alt="" src={this.props.img} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.cal} cal </small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" name="canti" value={this.props.value} onChange={this.props.cantiChange}  type="number" />
              </div>
              <div className="control">
                <button onClick={this.props.onClickElement}   className="button is-info">+</button>
           
                    <button name="delete" onClick={this.props.onClick} className="button is-danger">Delete</button>
                  
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
