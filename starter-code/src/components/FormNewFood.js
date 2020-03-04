import React, { Component } from 'react'

class FormNewFood extends Component {
    state={
        name:'',
        calories: 0,
        image: ''
    }
    handleFormSubmit = (event) =>{
        event.preventDefault();
        this.props.addFood(this.state)
        console.log(this.state)
        this.setState  ({
            name:'',
            calories: 0,
            image: ''
        })
        
    }
    handleNameInput =(event) =>{
        this.setState ({
            name: event.target.value
        })
    }
    handleCaloriesInput = (event) =>{
        this.setState({
            calories: event.target.value
        })
    }
    handlerImage = (event) =>{
        this.setState({
            image : event.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit ={this.handleFormSubmit}>
                    <label>Name:</label>
                    <input type="text" value={this.state.name} onChange={this.handleNameInput}/> <br/>
                    <label>Number of calories:</label>
                    <input type="number" value={this.state.calories} onChange={this.handleCaloriesInput}/><br/> 
                    <label> Image: </label>
                    <input type="text" value={this.state.image} onChange ={this.handlerImage}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
export default FormNewFood