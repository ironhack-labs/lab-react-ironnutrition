import React, { Component } from "react";
import foodData from '../../data/foods.json'
import FoodItem from "./FoodItem";
import FoodForm from "./FoodForm";
import FoodResume from './FoodResume';
import 'bulma/package.json'
import AddButton from "./AddButton";


class FoodList extends Component {

    state = {
        foodListed: [],
        foodSelected: [],
        showForm: false
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

    handleHideForm() {
        this.setState(( PrevState ) => ({
            ...PrevState,
            showForm: false
        }))
    }

    handleShowForm() {
        this.setState(( PrevState ) => ({
            ...PrevState,
            showForm: true
        }))
    }
    
    render(){

        const { foodListed, foodSelected, showForm } = this.state

        return(
            <div>
            <div>
                <div><AddButton onShowForm = {() => this.handleShowForm()} /></div>
            </div>
            <div className="columns is-desktop">
                <div className="column is-half-desktop">
                 {showForm && <FoodForm onCreateItem={(food) => this.handleCreateItem(food)} onHideForm = {() => this.handleHideForm()} />}
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
            </div>
        )
    }
}

export default FoodList