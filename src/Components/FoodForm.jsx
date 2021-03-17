import React, { Component } from 'react';

export class FoodForm extends Component {

    state = {
        name: "",
        calories: "",
        image: "",
        quantity: "",
    };

    handleSubmit = (event) => {
        this.props.addFood({
            name: this.state.name,
            calories: this.state.calories,
            image: this.state.image,
            quantity: this.state.quantity,
        });
        this.setState({});
    };

    handleNameChange = (event) => {
        const value = event.target.value;
        this.setState({name: value});
    };
    handleCaloriesChange = (event) => {
        const value = event.target.value;
        this.setState({calories: value});
    };
    handleImageChange = (event) => {
        const value = event.target.value;
        this.setState({image: value});
    };
    handleQuantityChange = (event) => {
        const value = event.target.value;
        this.setState({quantity: value});
    };


    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange} />
                    <label htmlFor="">Calories</label>
                    <input type="number" min="0" name="calories" value={this.state.calories} onChange={this.handleCaloriesChange} />
                    <label htmlFor="image" >Image</label>
                    <input type="file" name="image" value={this.state.image} onChange={this.handleImageChange} />
                    <label htmlFor="quantity" min="0">Quantity</label>
                    <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleQuantityChange} />
                    <button >Submit</button>
                </form>

            </div>
        )
    }
}

export default FoodForm;
