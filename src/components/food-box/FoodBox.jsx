import React from 'react';

class FoodBox extends React.Component {

  state = {
    quantity: 0
  }

  handleQuantity = (event) => {
    let { value } = event.target;
    this.setState({ quantity: value });
    this.props.food.quantity =  value;
  }

  render() {
    const { food } = this.props;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} alt="img" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.calories} kcal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value={this.state.quantity} onChange={this.handleQuantity}/>
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={() => this.props.addTodayFood(food)}
                >
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
