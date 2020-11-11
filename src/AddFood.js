import React, { Component } from 'react'

export class AddFood extends Component {
    state = {
        name: '',
        image: '',
        calories: '',
        quantity: ''
    }

    handleChange = event => {
        let { name, value } = event.target
        this.setState({ [name]: value})
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.props.addOneFood(this.state);
        this.setState({
            name: '',
            image: '',
            calories: '',
            quantity: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="name">Title:</label>
                    <input type="text" name="name" id="name" value={this.state.name} onChange={(e) => this.handleChange(e)}/>
                    
                    <label htmlFor="image">Image:</label>
                    <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)}/>

                    <label htmlFor="calories">Calories:</label>
                    <input type="number" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)}/>

                    <label htmlFor="quantity">Quantity:</label>
                    <input type="text" name="quantity" value={this.state.quantity} onChange={(e) => this.handleChange(e)}/>

                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default AddFood
