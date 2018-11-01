import React, { Component } from 'react';


class Foodbox extends Component {


  render() {
    return (
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img alt="" src={this.props.foodItem.image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.foodItem.name}</strong> <br />
                  <small>{this.props.foodItem.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number" 
                    value="1"
                    onChange={()=>{}}
                  />
                </div>
                <div className="control">
                  <button className="button is-info">
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
    );
  }
}

export default Foodbox;
