import React, { Component } from "react";
import foodData from '../../data/foods.json'
import FoodItem from "./FoodItem";
import FoodForm from "./FoodForm";
import FoodResume from './FoodResume';
import 'bulma/package.json'
import AddButton from "./AddButton";
import SearchBar from "./SearchBar";


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
            foodSelected: [...foodSelected, food]
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

    handleDeleteItem(name) {
        this.setState(({foodSelected}) => ({
            foodSelected: foodSelected.filter(food => food.name !== name)
        }))
    }

    handleSearchItems(event) {
        const { value } = event.target  
        if(value){
        this.setState(({foodListed}) => ({           
            foodListed: foodListed.filter(food => food.name.toLowerCase().includes(value)),
              
        }))} else {
            this.setState(({foodListed}) => ({           
                foodListed: foodListed
        }))}
      
    }

    
    render(){

        const { foodListed, foodSelected, showForm } = this.state

        return(
            <>
            {showForm && <FoodForm onCreateItem = {(food) => this.handleCreateItem(food)} onHideForm = {() => this.handleHideForm()} />}
            <div className="FoodList">           
                <SearchBar onClickSearch = {(event) => this.handleSearchItems(event)}/>
                <div className="columns is-desktop"> 

                    <div className="column is-half-desktop">                    
                        <div className="text-center">
                            <AddButton onShowForm = {() => this.handleShowForm()} />
                        </div>                
                    
                        {foodListed.map(item => 
                        <FoodItem 
                            {...item}
                            key={item.name}
                            onCreateListItem={(food) => this.handleCreateListItem(food)}
                            
                        />
                        )}
                    </div>

                    <div className="column">
                        <h3 className="text-center mb-3">Today's food</h3>
                        <table className="table"> 

                            {foodSelected.map(item =>
                                <FoodResume 
                                {...item}
                                onClickDelete = {(name) => this.handleDeleteItem(name)}
                                />
                            )}

                            <tr className="Resume">
                                <td>Total Calories</td>
                                <td></td>
                                <td>{foodSelected.reduce((acc, food) => acc + Number(food.calories*food.quantity), 0 )}</td>
                                <td></td>
                            </tr>                    
                        </table>                 
                    </div>            
                </div>
            </div>
            </>
        )
    }
}

export default FoodList