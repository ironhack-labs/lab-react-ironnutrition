import React, { Component } from 'react'
import data from '../../foods.json'
import Foodbox from '../FoodBox/FoodBox'
import FoodForm from '../FoodForm/FoodForm'
import TodayFoods from '../TodayFoods/TodayFoods'

class Foods extends Component {
    state = {
        foods: [...data],
        search: '',
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

    onClick = () => {
        console.log(this.state.quantity)
    }

    //DUDA: Queremos traernos de FoodForm el objeto que creamos (this.state.newFood)
    //foods: {this.foods, NewFood}

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
                                    <Foodbox {...food} onClick={this.onClick}/>
                            </div>
                            )
                        })}
                </div>
                <div className="column">
                    <TodayFoods foods={this.state.foods} quantity={this.state.quantity}/>
                </div>
            </div>

        )
    }
}

export default Foods