import React from "react";
import FoodBox from './FoodBox';

export default class FoodList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: props.foods
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => {
        this.updateFoods()
      },
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  updateFoods() {
    this.state.foods.map(food => <FoodBox key={food.name+food.calories} food={food} />)
  }

  render () {
    return (
      <div>
        {}
      </div>
    );
  }
}