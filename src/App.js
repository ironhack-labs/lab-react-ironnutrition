import React from 'react';
import './App.css';
import foodsjson from './foods.json';
import FoodBox from './components/FoodBox.jsx';
import AddFood from './components/AddFood'

class App extends React.Component {
  state = {
    foods: foodsjson,
  };

  add = (food) => {
    this.setState({foods: [food, ...this.state.foods]})
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.foods.map((food) => (
            <FoodBox food={food} />
          ))}
        </div>
        <div>
          <AddFood add={this.add}/>
        </div>
      </div>
    );
  }
}

export default App;
