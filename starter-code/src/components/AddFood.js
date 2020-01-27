import React, { Component } from 'react';

class AddFood extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            calories: '',
            image: '',
            quantity: ''
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addTheFood(this.state);
        this.setState({
            name: '',
            calories: '',
            image: '',
            quantity: ''
        })
    }

    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({ [name]: value });
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />

                    <label>Calories:</label>
                    <input type="number" name="calories" value={this.state.calories} onChange={this.handleChange} />

                    <label>Image:</label>
                    <input type="text" name="image" checked={this.state.image} onChange={this.handleChange} />

                    <label>Quantity:</label>
                    <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange} />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}

export default AddFood;