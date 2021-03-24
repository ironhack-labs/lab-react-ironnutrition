import React, { Component } from 'react'
import data from '../../foods.json'
import Foodbox from '../FoodBox/FoodBox'
import FoodForm from '../FoodForm/FoodForm'

class Foods extends Component {
    state = {
        foods: [...data],
        search: ''
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

    //foods: {this.foods, NewFood}

    render() {
        return (
            <div className="FoodBox" >
              <h2>Search Food</h2>
              <input onChange={this.handleSearch} value={this.state.search}/>
                <div className="mb-5 pb-5">
                    <FoodForm />
                </div>
                {this.filteredFood().map((food) => {
                    return(
                        <Foodbox {...food} key={food.name}/>
                    )
                })}
            </div>

        )
    }
}

export default Foods