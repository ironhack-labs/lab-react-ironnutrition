import React, { Component } from 'react'
import data from '../../foods.json'
import Foodbox from './../FoodBox/FoodBox'
import FoodForm from '../FoodForm/FoodForm'
import TodayFoods from '../TodayFoods/TodayFoods'

class Foods extends Component {
    state = {
        foods: [...data],
        search: '',
        todayFood: []
    }

    addFood = (newFood) => {
        //console.log(newFood)
        this.setState({foods: [newFood, ...this.state.foods]})
    }

    handleSearch = (e) => {
        this.setState({ search : e.target.value})
       //console.log(e.target.value)
    }

    filteredFood = () => {
        if (this.state.search) {
            return this.state.foods.filter( food => food.name.toLowerCase().includes(this.state.search))
        }
        return this.state.foods
    }

    addFoodToday = (food) => {
        let info = this.state.todayFood
        info.push(food)
        this.setState({ todayFood: info })
        //console.log(this.state.todayFood)
    }

render() {
        return (
            <div className="FoodBox colums" >
                <div className="mb-5 pb-5">
                    <h2>Search Food</h2>
                    <input onChange={this.handleSearch} value={this.state.search}/>
                </div>
                <div className="mb-5 pb-5">
                    <FoodForm addFood={this.addFood}/>
                </div>
                <div className="column">
                    {this.state.foods.length &&
                        this.filteredFood().map((food) => {
                            return (
                            <div className="mb-5 pb-5" key={food.name}>
                                    <Foodbox {...food} addFoodToday={this.addFoodToday}/>
                            </div>
                            )
                        })}
                </div>
                <div className="column">
                    <TodayFoods foods={this.state.todayFood}/>
                </div>
            </div>

        )
    }
}

export default Foods