import React, { Component } from 'react';

class FoodBox extends Component {
    constructor(props){
        super(props)
        this.addBtnHandler = this.addBtnHandler.bind(this)
    }
    addBtnHandler(){
        this.props.addToListHandler(this.props)
    }
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
                    value="1"
                  />
                </div>
                <div className="control">
                  <button className="button is-info" onClick={this.addBtnHandler}>
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