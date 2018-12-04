import React, { Component } from "react";

class FoodBox extends Component {
  constructor(){
    super()
  }


render () {
  return (
    <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src={this.props.img}/>
                  </figure>
                </div>
              <div className="media-content">
            <div className="content">
            <p>
              <div>{this.props.name}</div> <br />
              <small>{this.props.cal}</small>
            </p>
            </div>
          </div>
            <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number" 
                  value={this.props.name}
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

  )
  }
}


export default FoodBox;
