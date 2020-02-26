import React, { Component } from 'react'

export default class AddFood extends Component {
    
    state = {
        name: "",
        calories: "",
        image: "",
        quantity:""
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const newFood = this.state;
        this.props.addFoodFunc(newFood);

        this.setState({
            name: "",
            calories: "",
            image: "",
            quantity:""
        })
        
    }

    handleChange = event => {
        let {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input 
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                />

                    <label>Calories</label>
                    <input 
                        type="number"
                        name="calories"
                        value={this.state.calories}
                        onChange={this.handleChange}
                />

                    <label>Image</label>
                    <input 
                        type="text"
                        name="image"
                        value={this.state.image}
                        onChange={this.handleChange}
                />

                    <label>Quantity</label>
                    <input 
                        type="number"
                        name="quantity"
                        value={this.state.quantity}
                        onChange={this.handleChange}
                />
                 <button type="submit">Add New Food</button>
                </form> 
            </div>
        )
    }
}
