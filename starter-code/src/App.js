import React, { Component } from 'react';
import './App.css';

import FoodList from './components/FoodList/FoodList';
import FoodForm from './containers/FoodForm/FoodForm';
import 'bulma/css/bulma.css';
import foods from './foods.json';

class App extends Component {

  state = {
    foodList: foods.slice(),
    showForm: false
  };

    handleFormSubmit = (event, newFood) => {
        event.preventDefault();

        const food = newFood;
        const copyList = [...this.state.foodList];
        copyList.push(food);

        this.setState({
            foodList: copyList,
        });

        this.showForm();
    };

    showForm = () => {
        this.setState({
            showForm: !this.state.showForm
        });
    };

  render() {
    return (
        <div>
            <button id="addFoodBtn"  className="button is-success is-large" onClick={ this.showForm }>ADD NEW FOOD</button>
            <div className="main-content">
                <div className="foods-wrapper">
                    <FoodList foods={this.state.foodList.slice()}/>
                </div>
                {
                    this.state.showForm ? (
                        <div className="form-wrapper">
                            <h2 className="form-header">ADD NEW PRODUCT:</h2>
                            <FoodForm addFood={this.handleFormSubmit}/>
                        </div>
                    ) : null
                }
            </div>
        </div>
    );
  }
}

export default App;
