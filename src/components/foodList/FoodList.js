import React, { Component } from 'react';
import FoodBox from '../foodbox/FoodBox';
import FoodForm from '../newFoodForm/FoodForm'
import SearchBar from '../searchBar/SearchBar'

class FoodList extends Component {

    constructor() {
        super()
        this.state = {

            food: [],
            showForm: false
        }
    }

    componentDidMount() {

        this.setState({ food: this.props.data })
    }

    addNewFood = (newFood) => {

        const foodToAdd = { name: newFood.foodName, calories: newFood.calories, image: newFood.image, quantity: 0 }

        const foodCopy = [...this.state.food]
        foodCopy.push(foodToAdd)

        this.setState({ food: foodCopy })

        this.toggleFormView()
    }

    searchFood = (searchValue) => {

        const expresion = new RegExp(searchValue, 'i')

        this.setState({ food: this.props.data.filter(elm => elm.name.match(expresion)) })
    }

    toggleFormView = () => this.setState({ showForm: !this.state.showForm })

    render() {
        return (

            <div className='food-list'>

                <button className='button is-success form-btn' onClick={this.toggleFormView}>{this.state.showForm ? 'Cancelar creación' : 'Crear nuevo alimento'}</button>

                {this.state.showForm && <FoodForm addNewFood={this.addNewFood} />}

                <SearchBar searchFood={this.searchFood} />

                <div>

                    {this.state.food.map((elm, idx) => <FoodBox key={idx} data={elm} updateTodayFood={this.props.updateTodayFood} />)}

                </div>

            </div>

        )
    }
}

export default FoodList;