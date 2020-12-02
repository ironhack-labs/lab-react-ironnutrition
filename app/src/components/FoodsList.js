import React, { Component } from 'react'
import FoodsFromJson from '../foods.json'
import 'bulma/css/bulma.css'
import FoodBox from './foodbox/FoodBox'
import FoodForm from './NewFoodForm'
import SearchBar from './searchbar'


class FoodList extends Component {

    constructor() {
        super()
        this.state = {
            foods: FoodsFromJson
        }
    }

    insertNewFood = newFood => {
        const foodsCopy = [...this.state.foods]
        foodsCopy.push(newFood)
        this.setState({ foods: foodsCopy })
    }

    filterFoods = search => {
        const foodsCopy = [...this.state.foods]
        foodsCopy.filter(elm => elm.name.includes(search))
        this.setState({ foods: foodsCopy })
    }

    showFoodForm = () => {
        return (
            <FoodForm />
        )
    }

    render() {

        return (
            <>
                <SearchBar searchFood={this.filterFoods} />
                <FoodForm addFood={this.insertNewFood} />
                {/* <button className="button is-primary" onClick={this.showFoodForm}>Add New Food</button> */}
                {this.state.foods.map((elm, idx) => <FoodBox key={idx} {...elm} />)}
            </>

        )
    }
}

export default FoodList
