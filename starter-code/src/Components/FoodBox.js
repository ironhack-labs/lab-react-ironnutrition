import React from 'react';

class FoodBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1
    }
  }

  handleChangeQuantity = (e) => {
    this.setState({ quantity: e.currentTarget.value });
  }

  clickHandlerAddTodayFood = () => {
    this.props.addTodaysFoodMethod(this.props, this.state.quantity)
  }

  render() {
    return (
      <div className="column">
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.image} alt="food" />
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
                    name="quantity"
                    type="number"
                    min="1"
                    onChange={this.handleChangeQuantity}
                    value={this.state.quantity}
                  />
                </div>
                <div className="control">
                  <button className="button is-info" onClick={this.clickHandlerAddTodayFood}>
                    +
          </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    )
  }
}


export default FoodBox; 