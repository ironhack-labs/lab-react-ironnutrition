import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import foods from '../foods.json';
import FoodBox from './FoodBox';
import AddForm from './AddForm';
import Search from './Search'
import DailyEntry from './DailyEntry'
// uuidv4();

export default class FoodList extends Component {
    state = {
        foods: foods.map(food => ({
            ...food, key: uuidv4()
        })),
        dailyEntry: [],
        cal: 0,
        food: {
            name: 'Name',
            calories: 'Calories',
            image: 'Url image',
            quantity: 0,
            key: ''
        },
        formOff: true,
        search: ''
    }

    deleteFoodDaily = (id) => {
        let cal = 0;
        const dailyEntry = this.state.dailyEntry.filter((f) => {
            if (f.key !== id){
            cal += f.calories
            return f
            }
        })
        this.setState({
            dailyEntry: dailyEntry,
            cal: cal
        })
    }

    addFoodDaily = (id) => {
        const obj = (this.state.foods.find(food => food.key === id))
        const food = Object.assign({}, obj);
        let num = food.quantity;
        if (num === 0) { return }
        let rep = false;
        let cal = 0;
        const foods = this.state.dailyEntry.map((f) => {
            if (f.key === id) {
                rep = true;
                f.calories += food.calories * num;
                f.quantity += num;
            }
            cal += f.calories
            return f;
        });
        if (!rep) {
            food.quantity = num;
            food.calories *= num
            cal += food.calories
            foods.push(food);
        }
        this.setState({
            dailyEntry: foods,
            cal: cal
        })
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
        const foods = this.state.foods.map((f) => {
            if (f.key === event.target.name && event.target.value >= 0) {
                f.quantity = parseFloat(event.target.value)
            }
            return f;
        });
        this.setState({
            foods: foods
        })
    }

    stateFood = () => {
        return {
            name: this.state.food.name,
            calories: this.state.food.calories,
            image: this.state.food.image,
            quantity: this.state.food.quantity
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
                            <FoodBox
                                {...food}
                                addFood={() => this.addFoodDaily(food.key)}
                                handleChange={this.handleChange}
                                id={food.key}
                            />
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
                            ? <button onClick={this.hideForm} className='btn btn-outline-success'>Create food</button>
                            : <AddForm
                                addFood={this.handleSubmit}
                                handleChange={this.handleChange}
                                food={food}
                                hideForm={this.hideForm}
                            />
                    }
                    <div className='my-4'>
                        <h2 className='my-4'>Daily entry:</h2>
                        <ul>
                            {

                                this.state.dailyEntry[0]
                                    ? this.state.dailyEntry.map((food) => (
                                        <li key={food.key} >
                                            <DailyEntry
                                                {...food}
                                                deleteFoodDaily={() => this.deleteFoodDaily(food.key)}
                                            />
                                        </li>
                                    ))
                                    : <h1>Add a food</h1>
                            }
                        </ul>
                        <h1>Total: {this.state.cal} cal</h1>
                    </div>
                </div>
            </div>

        )
    }

}