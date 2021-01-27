import React from 'react';
import 'bulma/css/bulma.css';

class FoodBox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: this.props.food.name,
      calories: this.props.food.calories,
      quantity: 0,
    } 
  }

  handleQuantity = e => {
    this.setState({quantity: e.target.value})
  }

  addTodayFood = () => {
    this.props.foodToday(this.state);
    this.setState({quantity: 0});
  }

  render() {
    return(
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.food.image} alt={this.props.food.name} />
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
                  <input className="input" type="number" value={this.state.quantity} onChange={this.handleQuantity} />
                </div>
                <div className="control">
                  <button className="button is-info" onClick={this.addTodayFood}>
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

export {FoodBox};