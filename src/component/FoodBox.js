import React, { Component } from 'react'
import foods from '../foods.json';
import Food from './Food'
import AddNewFood from './AddNewFood.js';


export default class FoodBox extends Component {
    constructor(){
        super();
        this.addFoodHandler = this.addFoodHandler.bind(this);
    }

    state ={
        foodLijst:foods,
        seach: ''
    }

    addFoodHandler (theMovie){
        debugger
        var foodCopy=[...this.state.foodLijst];
        foodCopy.push(theMovie);
        this.setState({
            foodLijst:foodCopy
        })
    }

    onchange = e => {

            let filteredFood;
            let search;
            e.preventDefault();
            if (e.target.value !== ''){
                    search = e.target.value;
                    filteredFood = this.state.foodLijst.filter((e) => {
                        return e.name.toLowerCase().includes(search.toLowerCase());
                    });  
                this.setState({ 
                    foodLijst: filteredFood
                })
                }
                else{
                    this.setState({
                        foodLijst:foods
                    })
                }
      };

    render() {
        return (
        <div>
            
            <div>  
        <input
                  label="Search food"
                  icon="search"
                  placeholder = "Search food"
                  onChange={this.onchange}
                />
                { 
                    this.state.foodLijst.map((foodCharacterstic,index)=>
                        <Food 
                            key ={index}
                            img={foodCharacterstic.image} 
                            name ={foodCharacterstic.name}
                            calories = {foodCharacterstic.calories}
                            quantity = {foodCharacterstic.quantity}
                        />
                    )
                }
            </div> 
            <AddNewFood addTheFood = {this.addFoodHandler}/>
        </div>
        )
    }
}
