import React from 'react';
import 'bulma/css/bulma.css';
import _ from 'lodash';

class FoodBox extends React.Component {

  state = {
      name: "",
      calories: "",
      quantity: 0,
      total: 0
  }

  foodToMyListHandler = () => {

    let oneFood = {
      name: this.props.name,
      calories: this.props.calories,
      quantity: this.state.quantity
    }

    this.props.foodToMyListHandler(oneFood)

  }

  quantityChangeHandler = (event) => {

    this.setState({
      quantity: event.target.value,
    })
  }

  render() {
    return (
      <div className="box">
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
                <small>{this.props.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" name="quantity" type="number" value={this.state.quantity} onChange={this.quantityChangeHandler} />
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.foodToMyListHandler}>+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
