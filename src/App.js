import React from 'react';
import foods from './foods.json';
import FoodBox from './components/food-box/FoodBox';
import FoodForm from './components/food-form/FoodForm';

class App extends React.Component {
  state = {
    data: foods,
    showForm: false,
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  addFood = (food) => {
    food.quantity = 0;
    this.setState({
      data: [food, ...this.state.data],
      showForm: false,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <button className="button is-primary m-3" onClick={this.toggleForm}>
            {this.state.showForm ? 'Close' : 'Add Food +'}
          </button>
          {this.state.showForm && <FoodForm addFood={this.addFood} />}
          {this.state.data.map((food) => (
            <FoodBox food={food} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
