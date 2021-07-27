import React, { Component } from "react";
import foodData from '../../data/foods.json'
import FoodItem from "./FoodItem";
import FoodForm from "./FoodForm";
import FoodResume from './FoodResume';
import 'bulma/package.json'



class FoodList extends Component {

    state = {
        foodListed: [],
        foodSelected: []
    }

    componentDidMount() {
        this.setState({ foodListed: foodData })
    }

    handleCreateItem(food) {
        this.setState(( { foodListed }) => ({
            foodListed: [food, ...foodListed]
        }))

    }

    handleCreateListItem(food) {
        this.setState(( { foodSelected }) => ({
            foodSelected: [food, ...foodSelected]
        })) 
    }

    handleResumeCalories(food) {
        this.setState(( { foodSelected }) => ({
            foodSelected: [food, ...foodSelected]
        }))
    }
    
    render(){

        const { foodListed, foodSelected } = this.state

        return(
            <div className="columns is-desktop">
                <div className="column is-half-desktop">
                    <FoodForm onCreateItem={(food) => this.handleCreateItem(food)} />

                    {foodListed.map(item => 
                    <FoodItem 
                        {...item}
                        key={item.name}
                        onCreateListItem={(food) => this.handleCreateListItem(food)}
                    />
                    )}
                </div>
                <div className="column">
                    <h3>Today's food</h3>
                    <ul>

                    
                    {foodSelected.map(item =>
                         <FoodResume 
                         {...item}
                         />
                    )}
                   </ul>
                   <div className="d-flex justify-content-around">
                    <h5>Total Calories</h5> 
                    <h5>{foodSelected.reduce((acc, food) => acc + Number(food.calories), 0 )}</h5>
                   </div>
                </div>
            
            </div>
        )
    }
}

export default FoodList