import React, { Component } from 'react';
import FoodBox from '../FoodBox/FoodBox';
import foods from '../../foods.json';
import Form from '../Form/Form';

export default class FoodList extends Component {
    state= {
        foodList: foods,
        display: false,
        search: ""
    }

    displayFoods = () => {
        const foodsFiltred = this.state.foodList.filter((food) => food.name.includes(this.state.search))
        return foodsFiltred.map((food) => {
            return(
                <FoodBox key={food.name} {...food} />
            )
        })
    }
    addFood = (food) =>{
        const foodCopy = [...this.state.foodList];
        foodCopy.push(food);
        this.setState({ foodList: foodCopy})
    }
    handleSearch = (e) =>{
        this.setState({ search: e.target.value })
    }

    render() {
        return (
            <div>
                <input type="text" class="input search-bar" name="search" placeholder="Search" onChange={(e) => this.handleSearch(e)}/> 
                <button className="button is-info" onClick={() => this.setState({ display: !this.state.display})}>Add food</button>
                {this.state.display && <Form addFood={(food) => this.addFood(food)} />}
                <div> {this.displayFoods()}</div>
            </div>
        )
    }
}
