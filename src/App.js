import React from 'react';
import { v4 as uuidv4 } from 'uuid';
// import logo from './logo.svg';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import AddFood from './components/AddFood/AddFood';
import './App.css';

class App extends React.Component {
  state = {
    foods: foods.map((food) => ({
      ...food,
      id: uuidv4(),
    })),
    showForm: false,
  };

  onAddItem = (food) => {
    this.setState((prevState) => ({ showForm: !prevState.showForm }));
    this.setState({
      foods: [
        ...this.state.foods,
        {
          ...food,
          id: uuidv4(),
        },
      ],
    });
  };

  toggleShowForm = () => {
    this.setState((prevState) => ({
      showForm: !prevState.showForm,
    }));
  };

  render() {
    return (
      <div className="App container">
        <h1>
          <strong>IronNutrition</strong>
        </h1>
        <div className="App-button">
          <button onClick={this.toggleShowForm}>Add Food</button>
          {this.state.showForm && <AddFood onAddFood={this.onAddItem} />}
        </div>
        <div className="App-foodBox">
          {this.state.foods.map((food) => {
            return <FoodBox {...food} key={food.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
