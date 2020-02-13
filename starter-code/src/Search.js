import React, { Component } from 'react';

class Search extends Component {

    state = {
        food: ""
    }

    searchFood = async e =>{
        let newFood      = [...this.props.foodsProp]
        let filteredFood = newFood.filter(eachFood => {
            return eachFood.name.toLowerCase().includes(e.target.value)    
        })

        console.log("Filtered food",filteredFood)
        await this.setState({
            food: filteredFood
        })

        this.props.searchBoxFood(this.state)
    } // sets a vaiable to the foodProp, which is AllFood from App.js, filters it
    // returns whatever the input is on the search box, it's called onChange

    render() {
        // console.log("render search.js", this.state)
        return (
            <div>
                <input className= "input is-success" type="text" placeholder="Search..." name="search" onChange={this.searchFood}></input>
            </div>
        );
    }
} 

export default Search;