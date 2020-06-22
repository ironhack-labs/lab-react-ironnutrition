import React, { Component } from 'react';
import './Foods.css';
import 'bulma/css/bulma.css';
import foods from '../foods.json';
import Foodbox from './Foodbox';
import AddFood from './AddFood';
import Search from './Search';

class Foods extends Component {
    state = {
        food: foods,
        filterFood : foods,
        todaysFoods: []
    }

    addNewFoodHandler = aFood => {
        const foodCopy = [...this.state.food];
        foodCopy.push(aFood);
        this.setState({
            filterFood: foodCopy
        })
    }

    searchFoodHandler = search => {
        const foodCopy = this.state.food.filter(food => food.name.toLowerCase().includes(search.toLowerCase()));
        this.setState({
            filterFood: foodCopy
        })
    }

    addTodaysFoodsHandler = (food, quantity) => {
        let addTodaysFoods = this.state.todaysFoods;
        let todaysFoodsName = addTodaysFoods.map(food => food.name);
        if (quantity !== 0 && !todaysFoodsName.includes(food.name)){
            addTodaysFoods.push({name: food.name, calories: food.calories, quantity: quantity});
        }
        this.setState({
            todaysFoods: addTodaysFoods
        })
    }

    render() {
        let totalCal = 0;
        this.state.todaysFoods.map(item => totalCal += item.quantity * item.calories);

        return (
            <div className="container">
                <h1 className="title is-1">IronNutrition</h1>
                <Search searching={this.searchFoodHandler}/>
                <AddFood addFood={this.addNewFoodHandler}/>
                <div className="columns">
                    <div className="column">
                        {
                        this.state.filterFood.map((food, index)=>
                           <Foodbox
                            key = {index}
                            name = {food.name}
                            calories = {food.calories}
                            image = {food.image}
                            quantity = {food.quantity}
                            addTodaysFoods = {this.addTodaysFoodsHandler}
                            />
                        )
                        }
                    </div>
                    <div className="column">
                        <h2 className="title">Today's foods</h2>
                        <ul>
                            {
                                this.state.todaysFoods.map(todayItem => 
                                    <li>{todayItem.quantity} {todayItem.name} = {todayItem.quantity * todayItem.calories} cal</li>
                                )
                            }
                        </ul>
                        <p>Total: <span>{totalCal}</span> cal</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Foods;
