import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';

class FoodBox extends Component {
  constructor(props){
    super(props);

  }
  handleButton =(event)=> {
    event.preventDefault();
    this.props.onClick(this.props.keyProps);
  }
  render(){
    return(
      <div className="box" id={this.props.keyProps}>
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} />
             </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  onChange={(event)=>{this.props.updateQuantity(event, this.props.keyProps)}}
                  className="input"
                  type="number" 
                  value={this.props.quantity}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={(event)=>{this.handleButton(event)}}>
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