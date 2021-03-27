import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import foods from '../foods.json';
import FoodBox from '../components/FoodBox'
import FoodForm from '../components/FoodForm'
import { v4 as uuidv4 } from 'uuid';

class Foods extends Component {
    state = {
        foods: foods.map((food) => ({...food, id:uuidv4()})),
        search : ''
    }

    createFood = (newFood) => {
        this.setState({ foods: [...this.state.foods, newFood] })
    }

    onSearch = (e) => {
        this.setState({search: e.target.value})
    }

    render() {
        return (
            <div className="FoodBox">
                <input
                    type="text"
                    className="input search-bar"
                    name="search"
                    placeholder="Search"
                    value={this.state.search}
                    onChange={this.onSearch}
                />
                <div className="is-flex is-flex-wrap-nowrap">
                    <div className="column">
                        {this.state.foods.filter((food) => food.name.toLowerCase().includes(this.state.search.toLocaleLowerCase())).map(food => (
                            <div className="row" key={food.id}>
                                <FoodBox {...food}  />
                            </div>
                        ))}
                    </div>
                    <div className="column content">
                        <h2 className="subtitle">Today's foods</h2>
                        <ul>
                            <li>1 Pizza = 400 cal</li>
                            <li>2 Salad = 300 cal</li>
                        </ul>
                        <strong>Total: 700 cal</strong>
                    </div>
                </div>
                
                    <FoodForm createFood={this.createFood} />
            </div>
            
        );
    }
}

export default Foods;