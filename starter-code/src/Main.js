
import React, { Component } from 'react';
import './App.css';
import FoodBox from './FoodBox';
import listOfFoods from './foods.json'
import 'bulma/css/bulma.css';


class Main extends Component {
    state={
        theList: listOfFoods,
        filteredList: listOfFoods,
        todaysFoods: [],
        nameInput: '',
        caloriesInput: '',
        imageInput: '',
        searchInput: '',
        formShowing: false
    }

    showTodaysFoods = () =>{
        return(
            this.state.todaysFoods.map((eachFoodItem)=>{
                return (
                    <div>
                        <p>
                        {eachFoodItem.quantity}  {eachFoodItem.name}
                        </p>
                        <p>
                        total calories: {eachFoodItem.calories* eachFoodItem.quantity} 
                        </p>
                      
                    </div>
                )
            })
        )
    }


    showListOfFoods = () => {
        return(
            this.state.filteredList.map((eachFoodItem)=>{
                return (<FoodBox whatToDoWhenIClickTheButton={this.addToMenu} theFoodForThisParticularFoodBox = {eachFoodItem} />)
            })
        )
    }


    updateInput = (theEvent) => {
        this.setState({[theEvent.target.id]: theEvent.target.value}, ()=>{
            console.log(this.state)
        })
        
    }

    addTheFood = (e) =>{
        e.preventDefault();
        if(this.state.nameInput === '' || this.state.caloriesInput === '' || this.state.imageInput ===''){
            return;
        }
        const newFood = {};
        newFood.name = this.state.nameInput;
        newFood.calories = this.state.caloriesInput;
        newFood.image = this.state.imageInput;
        const copyOfFoodList = [...this.state.theList];
        copyOfFoodList.unshift(newFood);

        this.setState({theList: copyOfFoodList,
            nameInput: '',
            caloriesInput: '',
            imageInput: ''
        });

        this.toggleForm()
    }


    showForm = () => {
        if(this.state.formShowing){
            return (
                <form onSubmit={(e) => this.addTheFood(e)}>
            <h2>Add a New Food To The List</h2>
            <label>Name</label>
            <input  id="nameInput" type="text" value={this.state.nameInput} onChange={(e)=> this.updateInput(e)}/>
            <label>Calories</label>
            <input id="caloriesInput" type="number" value={this.state.caloriesInput} onChange={(e)=> this.updateInput(e)} />
            <label>Image Link</label>
            <input id="imageInput" type="text" value={this.state.imageInput} onChange={(e)=> this.updateInput(e)} />
            <button className="button is-info"> Submit </button>
        </form>
        )
        }
    }

    toggleForm = () => {
        this.setState({formShowing: !this.state.formShowing})
    }

    searchForFood = (e) => {
        this.setState({[e.target.id]: e.target.value}, ()=>{
            
            const fullList = [...this.state.theList];
          
            const newFilteredList = fullList.filter((eachFood)=>{
                return eachFood.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
            })
            
            this.setState({filteredList: newFilteredList})
        })
    }


    addToMenu = (foodToAdd, quantityToAdd) => {
        const copyOfList = [...this.state.todaysFoods];
        foodToAdd.quantity = quantityToAdd;

        copyOfList.push(foodToAdd);

        this.setState({todaysFoods: copyOfList});
    }

 


    render(){
        return(
            <div>

                <button className="button is-info" onClick={this.toggleForm}>Add Food</button>
                <input className="input" placeholder="Search for Foods" type="text" id="searchInput" value={this.state.searchInput} onChange={(e)=> this.searchForFood(e)} />
                {this.showForm()}

                <div className="listOfFoods">
                {this.showListOfFoods()}
                </div>


                <div>
                    Today's Foods
                    {this.showTodaysFoods()}
                </div>
            </div>
        )
    }
}
export default Main