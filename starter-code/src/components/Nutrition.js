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
            foods: foods.slice().map( (f,i)=>{f.ind=i; f.quantity = 1; return f}),
            showAddFoodForm: false,
            filterValue: "",
            foodsToday: []
        }
    }    

    // -----------------------------
    filterFoodListHandler = ( filter ) => {      
        this.setState({ filterValue: filter });
    }

    // -----------------------------
    addNewFoodHandler = () => {
        this.setState({showAddFoodForm: true});
    }

    addNewFoodToListHandler = ( newFood ) => {
        const foodsCopy = [...this.state.foods];
        foodsCopy.push( newFood );
        this.setState( {foods: foodsCopy, foodsFiltered: foodsCopy.slice(), filterValue:"", showAddFoodForm: false });
    }
F
    // -----------------------------
    addNewFoodTodayToListHandler = ( newFoodToday ) => {
        const foodsCopy = [...this.state.foodsToday];
        const id = foodsCopy.findIndex( (elem) => { return elem.name === newFoodToday.name });

        if( id >=0 ) {
            foodsCopy[id].quantity += newFoodToday.quantity
        } else {
            foodsCopy.push( newFoodToday );
        }
        this.setState( {foodsToday: foodsCopy });
    }

    removeFoodsTodayListHandler = ( id ) => {   
        const foodsCopy = [...this.state.foodsToday].filter ( elem => elem.ind !== id );
        this.setState({ foodsToday: foodsCopy.slice() });
    }

    // ----------------------------

    showFoodListHandler = () => {
        this.setState({showAddFoodForm: false});
    }

    render() {
        const showAddFoodForm = this.state.showAddFoodForm;

        let output;
        
        if (showAddFoodForm) {
            output = 
                <div className="box">
                    <h1 className="title"><u>Add New Food</u></h1>
                    <FoodAdd addNewFoodToListHandler={ this.addNewFoodToListHandler } />
                    <hr />
                    <button className ="button is-danger"onClick={this.showFoodListHandler}>Cancel</button>
                </div>;
        } else {
            output =
                <div>
                    <FoodSearch filterValue={ this.state.filterValue } filterFoodListHandler= {this.filterFoodListHandler }/>
                    <div className="columns is-mobile">
                        <div className="column">
                            <h1 className="title"><u>Food Overview</u></h1>
                            <FoodList foodList={this.state.foods} filter={this.state.filterValue} addNewFoodTodayToListHandler= {this.addNewFoodTodayToListHandler }/>
                            <hr />
                            <button className="button is-info" onClick={this.addNewFoodHandler}>Add New Food</button>
                        </div>
                        <div className="column">
                            <h1 className="title"><u>Food Today</u></h1>
                            <FoodToday foodList={this.state.foodsToday} removeFoodsTodayListHandler={this.removeFoodsTodayListHandler} />
                        </div>
                    </div> 
                </div> 
        }
                    
        return (
            <section className="section">
                <div className="container is-widescreen">
                    { output }
                </div>                          
            </section>
        )
    }
}
