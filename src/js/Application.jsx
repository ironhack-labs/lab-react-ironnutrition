import React from 'react'
import 'bulma/css/bulma.css'
import foods from '../foods.json'
import Food from './Food'
import Search from './Search'

class Application extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            foods: foods
        }

        this._searchFoods = this._searchFoods.bind(this)
        this._handleSearchChange = this._handleSearchChange.bind(this)
        this._increaseQty = this._increaseQty.bind(this)
    }

    render() {
        const mappedFoods = this.state.foods.map((food, index) => (
            <Food
                image={this.state.foods[index].image}
                name={this.state.foods[index].name}
                calories={this.state.foods[index].calories}
                key={index}
                quantity={this.state.foods[index].quantity}

            />
        ))

        return (
            < div className="application" >
                <h1>IronNutrition</h1>
                <Search
                    search={this.state.search}
                    handleSearchChange={this._handleSearchChange}
                    searchFoods={this._searchFoods}
                />
                {mappedFoods}
            </div >
        )
    }

    _handleSearchChange(event) {
        // this is invoked when data is input in the form
        this.setState({
            search: event.target.value,
        })
    }

    _searchFoods(event) {
        // this is invoked when seach button is invoked
        event.preventDefault()

        // console.log("search foods", this.state)
        // >> this.state => {foods: Array(16), search: "Pizza"}

        // const lowerName = foods.map((food) => (
        //     food.name.toLowerCase()
        // ))
        // console.log(lowerName) // >>> all name becamse lower case!!

        const serchResult = this.state.foods.filter(food => food.name.toLowerCase() == this.state.search.toLowerCase())
        this.setState({
            foods: serchResult,
        });
    }

    _increaseQty() {
        console.log("increase qty")
    }
}

export default Application
