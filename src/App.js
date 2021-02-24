import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import React from 'react';
import FoodBox from './components/foodBox/foodBox';
import AddFood from './components/addFood/addFood';
import Search from './components/search/Search';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: foods,
      showFoods: true,
      showForm: true,
    };
    this.updateQuantity = this.updateQuantity.bind(this);
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay(foodName) {
    let { data } = this.state;
    const foodsCopy = [...data];
    foodsCopy.forEach((oneFood) => {
      if (oneFood.name === foodName) {
        oneFood.isShown = oneFood.isShown ? false : true; //    !oneFood.isDone
      }
    });
    this.setState({ data: foodsCopy });
  }

  updateQuantity(name, value) {
    let { data } = this.state;
    const foodsCopy = [...data];
    foodsCopy.forEach((oneFood) => {
      if (oneFood.name === name) {
        if (!oneFood.quantity) oneFood.quantity = '';
        oneFood.quantity = Math.max(value, 0);
      }
    });
    console.log(name, value);
    this.setState({ data: foodsCopy });
  }

  toggleFoods = () => {
    this.setState({ showFoods: !this.state.showFoods });
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  addNewFood = (newFood) => {
    newFood.image = '/generic-food.png';
    newFood.quantity = 0;
    const updatedFoods = [newFood, ...this.state.data];
    this.setState({ data: updatedFoods });
  };

  filterFood = (input) => {
    const filtered = this.state.data.filter((el) =>
      el.name.toLowerCase().includes(input.toLowerCase())
    );
    this.setState({ data: filtered });
  };

  render() {
    return (
      <div>
        <h1>
          <strong>Awsome Food list!</strong>
        </h1>

        <Search filterFood={this.filterFood} />

        <button onClick={this.toggleForm}>
          {this.state.showForm ? 'Close' : 'Add Food'}
        </button>

        {/* If this.state.showForm is `true` the `AddMovie` is shown */}
        {this.state.showForm && <AddFood addFood={this.addNewFood} />}

        {this.state.data.map((el) => {
          return (
            <FoodBox
              key={el.name}
              name={el.name}
              calories={el.calories}
              imageSrc={el.image}
              imageAlt={el.name}
              quantity={el.quantity}
              updateQuantity={this.updateQuantity}
              toggleDisplay={this.toggleDisplay}
            />
          );
        })}
      </div>
    );
  }
}
export default App;
