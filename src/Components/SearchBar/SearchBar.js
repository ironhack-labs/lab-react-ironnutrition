import React, { Component } from 'react';
import foodsData from '../../foods.json';
import FoodBox from "../FoodBox/FoodBox";

const foodList = [...foodsData]

export default class SearchBar extends Component {

    state = {
        food: foodList,
        fields: {
            name: ""
        }
    };

    handleSearch(e) {
        this.setState({
            fields: {
                ...this.state.fields,
                title: e.target.value,
            }
        })
    }

    render() {
        return (
            <div className="form-item">
            <label htmlFor="name">Search: </label>
            <input placeholder="Search..." type="text" name="name" onChange={(e) => this.handleSearch(e)}/>
                {this.state.food.filter((val) => {
                    if(this.state.fields.name === "") {
                        return val
                    } else if (val.name.toLowerCase().includes(this.state.fields.name.toLowerCase())) {
                        return val
                    }
                })
                    .map((food, index) => {
                    return (
                        <div>
                            <FoodBox {...food} key={index}/>
                        </div>
                    )
                })}
                <button type="submit">Search</button>
            </div>
        )
    }
}
