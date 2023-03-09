import { Component } from "react";
import FoodsList from '../../../components/FoodsList/FoodsList'
import foodsJSON from '../../../foods.json'


export default class Home extends Component {
    state = {
        foods: foodsJSON,
    }
    
    render () {
        const { foods } = this.state; 
        return (
            <div className="Home">
            <h1>FOODS LIST</h1> 

            <FoodsList foods = {foods}/>

            </div>
        )
    }
}

