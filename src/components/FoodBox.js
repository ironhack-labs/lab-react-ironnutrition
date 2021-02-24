import React from 'react';

class FoodBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 0
        }
        this.onAddFood = this.onAddFood.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({quantity: value});
    }

    onAddFood() {
        if (this.state.quantity > 0) {
            this.props.addFoodToday(this.props.food, this.state.quantity);
        }
    }

  render() {
    return (
        <div className="box" >
            <article className="media">
            <div className="media-left">
                <figure className="image is-64x64">
                <img src={this.props.food.image} alt={this.props.food.name} />
                </figure>
            </div>
            <div className="media-content">
                <div className="content">
                <p className="has-text-left">
                    <strong>{this.props.food.name}</strong> <br />
                    <small>{this.props.food.calories} cal</small>
                </p>
                </div>
            </div>
            <div className="media-right">
                <div className="field has-addons">
                <div className="control">
                    <input className="input quantity" type="number" value={this.state.quantity} min={1} name="quantity" onChange={(event) => this.handleChange(event)} />
                </div>
                <div className="control">
                    <button className="button is-info" onClick={this.onAddFood}>+</button>
                </div>
                </div>
            </div>
            </article>
        </div>
        );
  }
}

export default FoodBox;

// {
//   "name": "Pizza",
//   "calories": 400,
//   "image": "https://i.imgur.com/eTmWoAN.png",
//   "quantity": 0
// },
