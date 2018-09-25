import React, { Component } from 'react';
import './App.css';

import FoodList from './components/FoodList/FoodList';
import FoodForm from './containers/FoodForm/FoodForm';
import SearchFood from './containers/SearchFood/SearchFood';
import 'bulma/css/bulma.css';
import foods from './foods.json';

class App extends Component {

  state = {
    foodList: foods.slice(),
    showForm: false,
    listIsEmpty: true,
    myProducts: [],
    totalCalories: 0
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

    searchFoods = (searchStr) => {
        let newList = foods.filter(f => f.name.toLowerCase().includes(searchStr.toLowerCase()));

        this.setState({
            foodList: newList
        });
    };

    addToday = (food) => {
        const newProducts = [...this.state.myProducts];
        newProducts.push({...food});

        this.setState({
            listIsEmpty: false,
            myProducts: newProducts,
            totalCalories: food.calories * food.quantity + this.state.totalCalories
        });
    };

  render() {
    return (
        <div>
            <h1 className="main-header">IronNutrition</h1>
            <button id="addFoodBtn"  className="button is-success is-large" onClick={ this.showForm }>ADD NEW FOOD</button>
            <SearchFood searchFoods={ this.searchFoods }/>
            <div className="main-content">
                <div className="foods-wrapper">
                    <FoodList foods={this.state.foodList.slice()} addToFood={ this.addToday }/>
                </div>
                {
                    this.state.showForm ? (
                        <div className="form-wrapper">
                            <h2 className="form-header">ADD NEW PRODUCT:</h2>
                            <FoodForm addFood={this.handleFormSubmit}/>
                        </div>
                    ) : null
                }

                {
                    (!this.state.listIsEmpty && !this.state.showForm) ? (
                        <div className="form-wrapper">
                            <h2 className="form-header">TODAY'S FOODS:</h2>
                            <ul className="myFood">
                                {
                                    this.state.myProducts.length ? (
                                        this.state.myProducts.map((p, id) => <li key={ p.name + id }> - {p.name}</li>)
                                    ) : null
                                }
                            </ul>
                            <p className="total">Total: { this.state.totalCalories } cal.</p>
                        </div>
                    ) : null
                }
            </div>
        </div>
    );
  }
}

export default App;
