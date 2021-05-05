import React from 'react';
import foods from './foods.json'
import FoodBox from './FoodBox'
import FoodForm from './FoodForm'
import Search from './Search'
import { Component } from 'react'


class FoodList extends Component {

    constructor() {
        super()
        this.state = {
            foodBox: foods,
            showForm: false
        }
    }

    createFood(newFood) {
        const foodsCopy = [...this.state.foodBox]
        foodsCopy.push(newFood)
        this.setState({ foodBox: foodsCopy })
    }

    searchFilter(searchField) {
        console.log(searchField);
        const { search } = searchField
        console.log(search);

        this.setState({

            foodBox: this.state.foodBox.filter(elm => {
                const name = elm.name.toLowerCase()
                console.log(elm.name);
                return name.startsWith(search)
            })
        })
    }

    render() {
        return (
            <>
                <button onClick={() => this.setState({ showForm: !this.state.showForm })}> Food form</button>

                {this.state.showForm ? <FoodForm addFood={newFood => this.createFood(newFood)} /> : null}
                <Search search={nameSearch => this.searchFilter(nameSearch)} />
                {this.state.foodBox.map(elm => <FoodBox {...elm} />)}
            </>

        )
    }

}

export default FoodList