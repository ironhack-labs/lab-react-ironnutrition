import React, { Component } from 'react';
import FoodList from './FoodList.js';
import FoodAdd from './FoodAdd.js';
import FoodSearch from './FoodSearch.js';
import FoodToday from './FoodToday.js';

import foods from '../foods.json';
import 'bulma/css/bulma.css';

export default class Nutrition extends Component {
    constructor(){
        super();
        this.state = {
            foods: foods.slice(),
            foodsFiltered: foods.slice(),
            showAddFoodForm: false,
            filterValue: ""
        }
    }    

    filterFoodListHandler = ( filter ) => {
        console.log("filterFoodListHandler", filter );
        const foodsMatchFilter = this.state.foods.filter( elem => {
            return elem.name.includes( filter );
        })

        this.setState({ foodsFiltered: foodsMatchFilter, filterValue: filter });
    }

    addNewFoodToListHandler = ( newFood ) => {
        console.log("addNewFoodToListHandler");
        const foodsCopy = [...this.state.foods];
        foodsCopy.push( newFood );
        this.setState( {foods: foodsCopy, foodsFiltered: foodsCopy, filterValue:"", showAddFoodForm: false });
    }

    addNewFoodHandler = () => {
        console.log("addNewFoodHandler");
        this.setState({showAddFoodForm: true});
    }

    showFoodListHandler = () => {
        console.log("showFoodListHandler");
        this.setState({showAddFoodForm: false});
    }

    render() {
        const showAddFoodForm = this.state.showAddFoodForm;

        console.log("showAddFoodForm", showAddFoodForm )
        let output;
        
        if (showAddFoodForm) {
            output = 
            <div>
                <h1><u>Add New Food</u></h1>
                <FoodAdd addNewFoodToListHandler={ this.addNewFoodToListHandler } />
                <hr />
                <button onClick={this.showFoodListHandler}>Cancel</button>
            </div>;
        } else {
            output = 
            <div>
                <FoodSearch filterValue={ this.state.filterValue } filterFoodListHandler= {this.filterFoodListHandler }/>

                <div class="columns is-mobile">
                    <div class="column">
                        <h1><u>Food Overview</u></h1>
                        <FoodList foodList={this.state.foodsFiltered} />
                        <hr />
                        <button onClick={this.addNewFoodHandler}>Add New Food</button>
                    </div>
                    <div class="column">
                        <h1><u>Food Today</u></h1>
                        <FoodToday />
                    </div>
                </div> 
            </div>                          
            ;
        }
                    
        return (
            <div>
                { output }
                <br />
            </div>
        )
    }
}
