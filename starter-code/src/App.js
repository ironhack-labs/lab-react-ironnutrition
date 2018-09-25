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
        const exFood = newProducts.find( p => p.name === food.name);

        if(!exFood) {
            newProducts.push({...food});

            this.setState({
                listIsEmpty: false,
                myProducts: newProducts,
                totalCalories: food.calories * food.quantity + this.state.totalCalories
            });
        } else {
            exFood.calories += food.calories * food.quantity;

            exFood.quantity += food.quantity;

            const idx = newProducts.findIndex(p => p.name === exFood.name);
            newProducts[idx] = exFood;

            this.setState({
                listIsEmpty: false,
                myProducts: newProducts,
                totalCalories: food.calories * food.quantity + this.state.totalCalories
            });
        }

    };

    deleteProduct = (id) => {
        const newProducts = [...this.state.myProducts];
        newProducts.splice(id, 1);
        const calories = newProducts.reduce((sum, p) => {
            return sum += p.calories;
        }, 0);

        this.setState({
            myProducts: newProducts,
            totalCalories: calories
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
                                        this.state.myProducts.map((p, id) => <li key={ p.name + id }> - {p.quantity} {p.name} = { p.calories } calories   <i className="fa fa-trash trash" onClick={ () => this.deleteProduct(id) }></i></li>)
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
