import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox';
import Form from './Components/Form.jsx';
import SearchBar from './Components/SearchBar';

class App extends React.Component {
  state = {
    foods: foods,
  };
  addFoodHandler = (newFood) => {
    this.setState({ foods: [newFood, ...this.state.foods] });

    //   const foodsCopy = [...this.state.foods];
    //   foodsCopy.push([newFood]);

    //   this.setState({ foods: foodsCopy });
  };

  render() {
    return (
      <div className="App">
        <SearchBar />
        <Form addFood={this.addFoodHandler} />

        {this.state.foods.map((item, i) => {
          return <FoodBox key={i} food={item} />;
        })}
      </div>
    );
  }
}
export default App;
