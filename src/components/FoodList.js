import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import foods from '../foods.json';
import FoodBox from './FoodBox';
import AddForm from './AddForm';
import Search from './Search'



// uuidv4();



export default class FoodList extends Component {
    state = {
        foods: foods.map(food => ({
            ...food, key: uuidv4()
        })),
        formOff: true,
        name: 'Name',
        calories: 'Calories',
        image: 'Url image',
        quantity: 0,
        key: '',
        search: ''
    }

    handleSearch = (e) => {
        this.setState({ search: e.target.value })
    }

    filterFoods = () => {
        if (this.state.search) {
            return this.state.foods
            .filter(food => food.name.toLowerCase().includes((this.state.search).toLowerCase()))
        }
        return this.state.foods
    }

    hideForm = () => {
        let s
        this.state.formOff ? s = false : s = true;
        this.setState({
            formOff: s
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    stateFood = () => {
        return {
            name: this.state.name,
            calories: this.state.calories,
            image: this.state.image,
            quantity: this.state.quantity
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const food = this.stateFood()
        food.key = uuidv4()
        const foods = (this.state.foods)
        foods.unshift(food)
        this.setState({
            foods: foods
        })
        this.hideForm()
    }

    render() {
        const food = this.stateFood()
        return (
            <div className='row'>
                <div className='col'>
                    {this.filterFoods().map((food, i) => {
                        return (
                            <FoodBox {...food} />
                        )
                    })}
                </div>
                <div className='col'>
                    <Search
                        handleSearch={this.handleSearch}
                        search={this.state.search}
                    />
                    {
                        this.state.formOff
                            ? <button onClick={this.hideForm} className='btn btn-outline-success'>Add food</button>
                            : <AddForm
                                addFood={this.handleSubmit}
                                handleChange={this.handleChange}
                                food={food}
                                hideForm={this.hideForm}
                            />
                    }
                </div>
            </div>

        )
    }

}