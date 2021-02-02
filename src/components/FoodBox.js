import React from 'react';
// import CalcFood from './CalcFood'

class FoodBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: this.props.food.name,
        calories: this.props.food.calories,
        image: this.props.food.image,
        quantity: this.props.food.quantity
    };
  }

  addTodaysFood = () => {
    this.props.handleTodaysFood(this.state);
    // const foodArray = [this.props.food.name]
  };

  quantityHandler = (event) => {
    const value = parseInt(event.target.value);

    this.setState({
      quantity: value
    })
  }


  render() {
    return (
      <div className="level">
        <div className="level-left ml-5">
          <article className="media box" style={{ width: '600px' }}>
            <div className="media-left">
              <figure className="image is-64x64">
                <img alt={this.state.image} src={this.state.image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content has-text-left">
                <p>
                  <strong>{this.state.name}</strong> (
                  <small>{this.state.calories}</small> Calories)
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    onChange={this.quantityHandler}
                    type="number"
                  />
                </div>
                <div className="control">
                  <button
                    className="button is-info"
                    onClick={this.addTodaysFood}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default FoodBox;