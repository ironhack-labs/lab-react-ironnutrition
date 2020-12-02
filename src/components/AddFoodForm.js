import React, { Component } from 'react'


const defaultValues = {name: "", calories: 0, image: "", quantity: 0};

class AddFoodForm extends Component {

    state = {
        name: "",
        calories: 0,
        image: "",
        quantity: 0
    }

    handleInput = (event) => {
        const {value, name} = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newFoodObj = this.state;
        this.props.addNewFood(newFoodObj);
        this.setState({defaultValues});        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label> <br/>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleInput}></input><br/>
                    <label>Calories: </label><br/>
                    <input type="number" name="calories" value={this.state.calories} onChange={this.handleInput}></input><br/>
                    <label>Image URL: </label><br/>
                    <input type="text" name="image" value={this.state.image} onChange={this.handleInput}></input><br/>
                    <button type="submit">Add Food</button>
                </form>
            </div>
        )
    }
}

export default AddFoodForm;
