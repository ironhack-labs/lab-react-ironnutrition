import React, { Component } from 'react';

// const FoodBox = (props) => {
  class FoodBox extends Component {
    constructor(props){
        super(props)
        this.state = {
          quantityField: 1,
        }
    }

  quantityFieldChange = (theEventObject) => {
    this.setState({quantityField: theEventObject.target.value})
  }

  render(){
    return (
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.image} alt={this.props.name} />
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
                  <input type="number" className="input" onChange={(e)=> this.quantityFieldChange(e)}  value={this.quantityField} />
                </div>
                <div className="control">
                  <button className="button is-info" onClick = {()=> this.props.onClickFunc()}>+</button>
                </div>
              </div>
            </div>
          </article>
        </div>
    )
  }
}

export default FoodBox;