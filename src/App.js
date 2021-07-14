import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foodsJson from './foods.json';
import FoodBox from './components/FoodBox';
import TodaysFood from './components/TodaysFood';

class App extends Component {

    state = {
        foods: foodsJson,
        filteredFoods: foodsJson,
        todaysFood: []
    }

    handleAddNewFood = (newFood) => {
        this.setState({
            foods: [newFood, ...this.state.foods],
            filteredFoods: [newFood, ...this.state.filteredFoods],
            todaysFood: []
        })
    }

    handleSearch = (event) => {
        const {foods} = this.state;
        let searchedFood = event.target.value

        let filteredFoods = foods.filter((food) => {
            return food.name.toLowerCase().includes(searchedFood.toLowerCase());
        })

        this.setState({
            filteredFoods: filteredFoods
        })
    }

    handleTodaysFood = (event, food) => {
        const {todaysFood} = this.state;

        event.preventDefault();

        let foodObj = {
            name: food.name,
            calories: food.calories,
            image: food.image,
            quantity: event.target.quantity.value
        }

        todaysFood.forEach((food, index) => {
            if (food.name === foodObj.name) {
                foodObj.quantity = Number(food.quantity) + Number(foodObj.quantity);
                todaysFood.splice(index, 1);
            }
        })

        this.setState({
            todaysFood: [foodObj, ...this.state.todaysFood]
        })
    }

    handleDelete = (index) => {
        const { todaysFood } = this.state;

        let updatedFoods = todaysFood.filter((food, i) => {
            return i !== index;
        })

        this.setState({
            todaysFood: updatedFoods
        })
    }

    render() {
        const { filteredFoods } = this.state;

        return (
            <div className="columns container has-text-centered m-auto">
                <div className="column">
                    <h1 className="is-size-1">IronNutrition</h1>
                    <FoodBox
                        onTodaysFood={this.handleTodaysFood}
                        onSearch={this.handleSearch}
                        onAddNewFood={this.handleAddNewFood}
                        foods={filteredFoods}
                    />
                </div>
                <div className="column">
                    <h1 className="is-size-1">Today's Foods</h1>
                    <TodaysFood onDelete={this.handleDelete} foods={this.state.todaysFood}/>
                </div>
            </div>
        )
    }
}

export default App;
