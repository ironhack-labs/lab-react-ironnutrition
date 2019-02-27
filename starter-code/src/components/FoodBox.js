import React, { Component } from "react";

class FoodBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }
  }
  
  render() {

    const onChangeValue = (event) => {
      if (event.target.value >= 0) {
        this.setState({value: event.target.value})
      } else {
        event.target.value = 0;
      }
    }


    return(
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={ this.props.food.image } alt={ this.props.food.name }/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.food.name}</strong> <br />
                <small>{this.props.food.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number" 
                  value={this.state.value} 
                  onChange={onChangeValue}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={ () => this.props.onModifyMenu({...this.props.food, quantity: this.state.value})}>
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