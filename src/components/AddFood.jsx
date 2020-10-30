import React from 'react';
import FoodForm from './FoodForm';

class AddFood extends React.Component {
  state = {
    addFood: false,
  };

  displayForm = () => {
    this.setState((prevState) => ({
      addFood: !prevState.addFood,
    }));
  };

  render() {
    return (
      <div className="new-food-container">
        <button onClick={this.displayForm} className="button">
          {this.state.addFood ? 'cancel' : ' + new food'}
        </button>
        {this.state.addFood && <FoodForm />}
      </div>
    );
  }
}

export default AddFood;
