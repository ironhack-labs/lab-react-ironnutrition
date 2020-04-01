import React, { Component } from 'react';
import foodList from '../foods.json'
import FoodBox from './FoodBox';
import AddFood from './AddFood';
// import Search from './Search';

class DisplayFoods  extends Component {
    constructor(){
        super();
        this.filterFoods = this.filterFoods.bind(this);
    }
    state = {
        food: foodList,
        filteredFoods : foodList
    }

    addFoodHandler = (theFood) => {
        const foodCopy = [...this.state.food];
        foodCopy.push(theFood);
        this.setState({
            food: foodCopy
        })
    }

    filterFoods = (e) => {
        let filterTheFoods = this.state.food.filter((item)=>{
            return(
                item.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
        })
        this.setState({
            filteredFoods: filterTheFoods
        })
    }


    render(){
        return(
            <div>
                <div>
                    <input type="text" placeholder = "Search" onChange={this.filterFoods}/>
                </div>
                    {/* <Search filterFood = {this.filterFoods}/> */}
                <div className = "columns">
                    <div className = "column">
                    {this.state.filteredFoods.map((item, indexN)=>(
                        <FoodBox 
                            key = {indexN.toString()} 
                            pic = {item.image} 
                            name = {item.name} 
                            calories = {item.calories}
                        />
                    ))}
                    </div>
                    <div className = "column">
                    <div class="column content">
                        <h2 class="subtitle">Today's foods</h2>
                        <ul>
                            <li>1 Pizza = 400 cal</li>
                            <li>2 Salad = 300 cal</li>
                        </ul>
                        <strong>Total: 700 cal</strong>
                        </div>
                    </div>
                </div>
                <AddFood addTheFood={this.addFoodHandler}/>
            </div>
        )
    }
}

export default DisplayFoods;