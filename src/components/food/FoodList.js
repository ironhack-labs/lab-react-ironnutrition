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
        console.log( this.state.foodSelected )

    }
    
    render(){

        const { foodListed, foodSelected } = this.state

        return(
            <div className="d-flex">
                <div>
                    <FoodForm onCreateItem={(food) => this.handleCreateItem(food)} />

                    {foodListed.map(item => 
                    <FoodItem 
                        {...item}
                        key={item.name}
                        onCreateListItem={(food) => this.handleCreateListItem(food)}
                    />
                    )}
                </div>
                <div>
                    <h3>Today's food</h3>
                    <ul>
                    {foodSelected.map(item =>
                         <FoodResume 
                         {...item}
                         />
                    )}
                   </ul>
                    <h5>Total Calories</h5>
                </div>
            
            </div>
        )
    }
}

export default FoodList