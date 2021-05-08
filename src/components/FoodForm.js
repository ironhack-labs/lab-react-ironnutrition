import React, { Component } from 'react';

class FoodForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            image: "",
            name: "",
            calories: "",
            quantity: 0,
        }
    }

    updateImage(event){
        this.setState({
            image: event.target.value,
        })
    }

    updateName(event){
        this.setState({
            name: event.target.value,
        })
    }

    updateCalories(event){
        this.setState({
            calories: event.target.value,
        })
    }

    updateQuantity(event){
        this.setState({
            quantity: event.target.value,
        })
    }

    render(){
        return(
            <form onSubmit={(e) => {this.props.addNewFood(e, this.state);}}>
                <label>Image:</label>
                <input type="text" name="image" value={this.state.image} onChange={(e) => {this.updateImage(e)}}/>
                <label>Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={(e) => {this.updateName(e)}}/>
                <label>Calories:</label>
                <input type="number" name="calories" value={this.state.calories} onChange={(e) => {this.updateCalories(e)}}/>
                <label>quantity:</label>
                <input type="number" name="quantity" value={this.state.quantity} onChange={(e) => {this.updateQuantity(e)}}/>
                <button>Submit</button>
            </form>
        )
    }
}

export default FoodForm;