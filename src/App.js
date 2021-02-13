import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import SearchBar from './components/SearchBar';
class App extends React.Component {
    state = {
        foods: foods,
        displayedFoods: [...foods],
        totalCaloriesFoods: []
    }
    handleAddFood = (newFoodItem) => {
        const newFoods = [newFoodItem, ...this.state.foods]
        this.setState({
            foods: newFoods,
            displayedFoods: newFoods
        })
    }
    handleFilterFood = (value) => {
        const newFoods = this.state.foods.filter(food => (food.name.toUpperCase().includes(value.toUpperCase())))
        this.setState({
            displayedFoods: newFoods
        })
    }
    handleAddCalories = (food, quantity) => {
        let summedUpFood = {
            name: food.name,
            calories: food.calories,
            quantity: quantity
        }
        this.setState({
            totalCaloriesFoods: [...this.state.totalCaloriesFoods, summedUpFood]
        })
    }
    render() {
        const foodList = this.state.displayedFoods.map((element) => {
            return <FoodBox key={element.name} food={element} handleAddCalories={this.handleAddCalories}/>
        });
        let totalCalories = this.state.totalCaloriesFoods.reduce((acc, food) => {
            return acc + (food.calories * food.quantity)
        }, 0)
        return (
            <div className="App">
                <SearchBar filterFood={this.handleFilterFood} />
                <AddFood addFood={this.handleAddFood} />
                {foodList}
                <div class="column">
                    Total calories
        <ul>
                        {
                            this.state.totalCaloriesFoods.map((food) => {
                                return <li>{food.quantity} {food.name} = {food.quantity * food.calories} cal</li>
                            })
                        }
                    </ul>
                    <p>Total {totalCalories} cal</p>
                </div>
            </div>
        )
    }
}
export default App;
