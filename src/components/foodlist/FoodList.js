import React from 'react';
import 'bulma/css/bulma.css';
import foods from '../../foods.json';
import FoodBox from '../../components/foodbox/FoodBox';

export default class FoodList extends React.Component {
  state = {
    foods: [...foods],
  };

  render() {
    return (
      <div>
        {this.state.foods.map((food, index) => {
          return <FoodBox food={food} key={`${food.name}${index}`} />;
        })}
      </div>
    );
  }
}
