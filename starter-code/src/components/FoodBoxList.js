import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import '../App.css';
import {FoodBox} from './FoodBox';
import foodList from '../foods.json'


export class FoodBoxList extends Component {
    constructor(){
      super();
      this.state = {
        enableAddNewFood: false,
        foods: foodList

      }
    }

    searchFood = (input) => {
        let searchResult = this.state.foods.filter(e => e.name.includes(input));
        this.setState({foods: searchResult})
      }




    render() {
        return (
                <div>
                <input className="input" type="text" placeholder="Search Foods" onChange={(input) => this.searchFood(input.target.value)} />  
                {this.state.foods.map((e,i) => <FoodBox key={i}  {...e}/>)}
                </div>
                )
    }
}
