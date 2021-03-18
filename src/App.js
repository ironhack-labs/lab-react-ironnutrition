import React from 'react';
import './App.css';
import foodsjson from './foods.json';
import FoodBox from './components/FoodBox.jsx';
import AddFood from './components/AddFood'

class App extends React.Component {
  state = {
    foods: foodsjson,
    filterText: ''
  };

  add = (food) => {
    this.setState({foods: [food, ...this.state.foods]})
  }


  render() {

    const filteredProducts = this.state.foods.filter(product => product.name.includes(this.state.filterText))

    return (
      <div className="App">
        <div>
          {filteredProducts.map((food) => (
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
