import React, { Component } from 'react';

export default class FoodBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            calories: 0,
            image: '',
            quantity: 0
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addFood(this.state);
        this.setState({
            name: '',
            calories: 0,
            image: '',
            quantity: 0
        })
    }

    handleChange = (event) => {
        let {name, value} = event.target;
        this.setState({
           [name]: value
        })  
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />

                    <label>Calories</label>
                    <input type="number" name="calories" step='1' value={this.state.calories} onChange={this.handleChange}/>

                    <label>Image URL</label>
                    <input type="text" name="image" value={this.state.image} onChange={this.handleChange}/>

                    <label>Quantity</label>
                    <input type="number" name="quantity" step="1" value={this.state.quantity} onChange={this.handleChange}/>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
