import  React, { Component } from 'react';
import './App.css';

import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { AddButton, StyledForm } from './App.styled';

class App extends Component {
    state = {
        foods: foods,
        newFood: {
            name: "",
            calories: "",
            image: ""
        },
        isAdding: false
    }

    addHandler = () => {
         this.setState({
            ...this.state,
            isAdding: !this.state.isAdding
        })
    }

    changeHandler = (e) => {
        const updatedNewFood = {...this.state.newFood};
        updatedNewFood[e.target.title] = e.target.value;
        this.setState({
            ...this.state,
            newFood: updatedNewFood
        })
    }

    submitHandler = (e) => {
        const updatedFoods = [...this.state.foods];
        updatedFoods.push(this.state.newFood)
        this.setState({
            ...this.state,
            foods: updatedFoods
        })
        console.log(this.state)
        e.preventDefault()
    }

    render() {
        return (
            <React.Fragment>
                <AddButton onClick={this.addHandler}>Add New Food</AddButton>
                {
                this.state.isAdding && 
                <StyledForm onSubmit={this.submitHandler}>
                    <label>Name: </label>
                    <input title="name" placeholder="Pizza" type="text" onChange={this.changeHandler} required/>
                    
                    <label>Calories: </label>
                    <input title="calories" placeholder="400" type="number" onChange={this.changeHandler} required/>
                    
                    <label>Image URL: </label>
                    <input title="image" placeholder="https://i.imgur.com/2ZV7EwI.jpg" type="text" onChange={this.changeHandler} required/>
                    <button type="submit">Submit</button>
                </StyledForm>
                }
                <FoodBox foods={this.state.foods}/>
            </React.Fragment>
        );
    }
}

export default App;
