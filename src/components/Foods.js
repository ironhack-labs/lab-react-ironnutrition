import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import foods from '../foods.json';
import FoodBox from '../components/FoodBox'
import FoodForm from '../components/FoodForm'
import TodayFood from '../components/TodayFood'
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

    onQuantityChange = (food) => {
        this.setState((previous) => {
            const index = previous.foods.findIndex((f) => f.id === food.id);
            return {
                foods: [
                    ...previous.foods.slice(0, index),
                    food,
                    ...previous.foods.slice(index + 1),
                ],
            };
        });
    };

    removeFood = (food) => {
        this.setState((previous) => {
            const index = previous.foods.findIndex((f) => f.id === food.id);
            return {
                foods: [
                    ...previous.foods.slice(0, index),
                    { ...previous.foods[index], quantity: 0 },
                    ...previous.foods.slice(index + 1),
                ],
            };
        });
    };

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
                                <FoodBox {...food} onChange={this.onQuantityChange} />
                            </div>
                        ))}
                    </div>
                    <TodayFood foods={this.state.foods} removeFood={this.removeFood}/>

                 </div>
                    <FoodForm createFood={this.createFood}  />
            </div>
            
        );
    }
}

export default Foods;