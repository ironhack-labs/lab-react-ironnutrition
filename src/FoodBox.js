import React from 'react';
import TodaysFoods from './TodaysFoods';

class FoodBox extends React.Component {
  state = {
    foods: this.props.food,
    todayFoods: [],
  };
  actualizeFood(index, event) {
    const { value } = event.target;
    const stateCopy = { ...this.state };
    stateCopy.foods[index].quantity = value;
    this.setState(stateCopy);
  }

  addFood(name, calories, quantity){
    const stateCopy = { ...this.state };
    stateCopy.todayFoods.push({name, calories, quantity})
    this.setState(stateCopy)
  }

  render() {
    const allFood = this.props.food.map((food, index) => {
      return (
        <div className="box" key={index}>
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={food.image} alt={food.name} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{food.name}</strong> <br />
                  <small>{food.calories} cal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    placeholder="0"
                    onChange={(event) => this.actualizeFood(index, event)}
                  />
                </div>
                <div className="control">
                  <button className="button is-info"  onClick={() => this.addFood(food.name, food.calories, food.quantity)}>+</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      );
    });

    return (
      <div className="FoodBox">
        <div className="columns">
          <div className="column">{allFood}</div>
          <div className="column">
            <TodaysFoods addFood={this.state.todayFoods}  />
          </div>
        </div>
      </div>
    );
  }
}

export default FoodBox;
