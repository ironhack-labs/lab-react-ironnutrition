import React from 'react';
import foodsData from '../../data/foods.json';
import Foodbox from '../food-box/FoodBox';

class FoodList extends React.Component {
  state = {
    foods: [],
  };

  componentDidMount() {
    this.setState({
      foods: foodsData.map((food, i) => {
        return {
          name: food.name,
          calories: food.calories,
          image: food.image,
          quantity: food.quantity,
          id: i,
        };
      }),
    });
  }

  handleAddFood(id) {
    console.log(id);
  }

  render() {
    const { foods } = this.state;

    return (
      <div className="row mb-2">
        <div className="col-9">
          {foods.map((food) => (
            <Foodbox {...food} onAddFood={(id) => this.handleAddFood(id)} />
          ))}
        </div>
      </div>
    );
  }
}

export default FoodList;
