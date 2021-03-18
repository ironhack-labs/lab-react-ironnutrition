import React from 'react';
import 'bulma/css/bulma.css';

import './App.css';
import Foodbox from './components/Foodbox';
import FormFood from './components/FormFood';
import foodsJSON from './foods.json';

class App extends React.Component {

  state = {
    foods: foodsJSON,
  };

  addFood = (aValueFromChild) => {
    console.log(aValueFromChild, "again from parent");

    this.setState({ foods: [aValueFromChild, ...this.state.foods] });
  };
  render() {
    return (
    <div >
      <Foodbox foods={this.state.foods}/>
      <FormFood addFood={this.addFood}/>
    </div>
  );
  }
}

export default App;
