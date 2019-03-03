import React, { Component } from 'react';


export default class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0
    }

  }

  addFood = () => {
    this.props.onModifyMenu({
      name: this.props.name,
      calories: this.props.calories,
      amount: this.state.amount
    })
  }

  render() { 

    const handleChange = (event) => {
        if (event.target.value >= 0){
          this.setState({
            amount:event.target.value
          })     
        }    
      }
 
    return (

      <div className="box column ">
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
                <input
                  className="input"
                  type="number"
                  value={this.state.amount}
                  onChange={handleChange}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.addFood}>
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


