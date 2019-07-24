import React, { Component } from 'react'

class FoodBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
      name: '',
      calories: '',
    }

    this.moreQuantity = this.moreQuantity.bind(this);
    this.selectedSubmit = this.selectedSubmit.bind(this);
  }

  moreQuantity(event) {
    this.setState({
      quantity: event.target.value
    })
  }

  selectedSubmit(event) {
    event.preventDefault();

    const newState = [...this.state];

    const newFood = {
      quantity: this.state.quantity,
      name: this.props.name,
      calories: this.props.calories * this.state.quantity,
    }
    console.log(newFood);

    this.props.foodSelected(newFood);
  }

  render() {
    return (
      <form onSubmit={this.selectedSubmit}>
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
                    <input
                      className="input"
                      type="number" 
                      name="quantity"
                      value={this.state.quantity}
                      onChange={this.moreQuantity}
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
      </form>
    )
  }
}

export default FoodBox;