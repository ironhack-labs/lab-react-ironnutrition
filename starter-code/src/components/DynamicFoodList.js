import React, { Component } from 'react';
import FoodBox from './FoodBox';
import AddFood from './AddFood';
import Search from './Search';
import foods from '../foods.json';

class DynamicFoodList extends Component {
    constructor() {
        super();
        this.state = {
            foods,
            showButton: false,
            search: ''
        };
    }    

    toggleButton = () => {
        this.setState({ showButton: !this.state.showButton })
    }

    addFoodHandler = food => {
        let foodCopy = [...this.state.foods];
        foodCopy.push(food);
        this.setState({
            foods: foodCopy,
            showButton: false,
            search: ''
        })
    }

    updateSearch = e => {    
        this.setState({
            search: e.target.value
        })
    }

    render() {
        let filteredContacts = this.state.foods.filter(
            (contact) => {
                return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        return (
            <div className="DynamicFoodList">
                <button onClick={() => this.toggleButton()}>
                    {this.state.showButton ? 'Hide Form' : 'Show Form'}                
                </button>                
                { this.state.showButton && <AddFood addTheFood={this.addFoodHandler} /> }
                <br />
                <input 
                    type='text' 
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                />
                { filteredContacts.map((food, idx) => <FoodBox key={idx} {...food} />) }        
            </div>
        );
    }
}

export default DynamicFoodList;