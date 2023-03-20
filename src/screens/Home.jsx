import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FoodList from '../components/FoodList/FoodList';
import AddFoodForm from '../components/Form/AddFoodForm/AddFoodForm';
import foods from '../foods.json';

class Home extends Component {
  state = {
    foods: foods,
    showAddFood: true,
  };

  onSubmitFood = (food) => {
    const { foods } = this.state;
    const newFood = {
      id: uuidv4(),
      ...food,
    };

    const newFoods = [newFood, ...foods];

    this.setState({ foods: newFoods });
  };

  render() {
    return (
      <div className="Home">
        <h2>
          <strong>Add Food Entry</strong>
        </h2>
        <AddFoodForm onSubmitFood={this.onSubmitFood} />
        <h2>
          <strong>Food List</strong>
        </h2>
        <FoodList foods={this.state.foods} />
      </div>
    );
  }
}

export default Home;
