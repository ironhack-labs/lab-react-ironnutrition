import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import Food from './components/Food/Food';
import NewFood from './components/NewFood/NewFood';
import Search from './components/Search/Search';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showFoodForm: false,
    };

    this.showNewFoodForm = this.showNewFoodForm.bind(this);
  }

  showNewFoodForm = () => {
    this.setState({ showFoodForm: !this.state.showFoodForm });
    console.log('this is state', this.state.showFoodForm);
  };

  searchFood = () => {};

  render() {
    return (
      <div>
        <h1>IronNutrition</h1>
        <div>
          <Search onChange={this.searchFood} />
        </div>
        {this.state.showFoodForm ? (
          <NewFood
            updateFoodList={this.updateFood}
            showNewFoodForm={this.showNewFoodForm}
          />
        ) : (
          <button onClick={this.showNewFoodForm}>Add New</button>
        )}
        <Food />
      </div>
    );
  }
}
