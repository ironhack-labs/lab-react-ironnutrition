import React from 'react';
import './FoodBox.css';

class FoodBox extends React.Component {
    state={
        quantity: 1,
    }
    
    handleChange = event => {
        const { name, value } = event.target;

        if(value<0) return;

        this.setState({ [name]: value });
    }

    updateCart = () => {
        const { food, updateCart } = this.props;
        console.log(this.state.quantity);

        updateCart({ ...food, quantity: this.state.quantity });
    }

    render() {
    return (
    <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.food.image} alt={`food-${this.props.food.name}`} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.food.name}</strong> <br />
                <small>{this.props.food.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange}/>
              </div>
              <div className="control">
                <button onClick={this.updateCart} className="button is-info">
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

export default FoodBox;
