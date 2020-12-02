import React, { Component } from 'react';

export default class AddFoodForm extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            image: '',
            calories: '',
            quantity: ''
        }
    }

    handleChange = event => {
        let { name, value } = event.target
        this.setState({[name]: value})
    }
    
    handleFormSubmit = event => {
        event.preventDefault()
        this.props.addOneFood(this.state)
        this.setState({
            name: '',
            image: '',
            calories: '',
            quantity: '',
        })
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>Name:</label><br/>
                <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)}/><br/><br/>

                <label>Image:</label><br/>
                <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)}/><br /><br />
                
                <label>Calories:</label><br/>
                <input type="number" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)}/><br /><br />
                
                <label>Quantity:</label><br/>
                <input type="number" name="quantity" value={this.state.quantity} onChange={(e) => this.handleChange(e)}/><br /><br />
                
                <input type="submit" value="Create new food"/>
            </form>
        )
    }

}