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

    addTodaysFoodsHandler = food => {
        let addTodaysFoods = this.state.todaysFoods;
        addTodaysFoods.push({food});
        this.setState({
            todaysFoods: addTodaysFoods
        })
    }

    render() {
        let totalCal = 0;
        this.state.todaysFoods.map(item => totalCal += item.food.calories);

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
                                <li>{todayItem.food.name} = {todayItem.food.calories} cal</li>
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
