import React from 'react';
import './App.css';
import foodsjson from './foods.json';
import FoodBox from './components/FoodBox.jsx';
import AddFood from './components/AddFood';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  state = {
    foods: foodsjson,
    filterText: ''
  };

  add = (food) => {
    this.setState({foods: [food, ...this.state.foods]})
  }

  liftValue = (value) => {
    this.setState({filterText: value})
  }

  render() {

    const filteredProducts = this.state.foods.filter(product => product.name.toLowerCase().includes(this.state.filterText.toLowerCase()))

    return (
      <div className="App">
        <div>
          <SearchBar inputValue={this.state.filterText} liftValue={this.liftValue}/>
        </div>
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
