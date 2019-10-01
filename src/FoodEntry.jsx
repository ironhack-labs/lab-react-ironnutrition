import React, { Component } from 'react';

class FoodBox extends Component {
    state = {
        showForm: false,
        calories: 0,
        name: '',
        image: ''
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.createFood(this.state)
        this.setState({
            name: '',
            calories: '',
            image: '',
            showForm: false
        })
    }


    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({ [name]: value });
    }

    showForm = () => {
        return ((this.state.showForm) ? (
            <form onSubmit={this.handleFormSubmit}>
                <label htmlFor="name">Name</label>
                <input placeholder="new food name" type="text" name="name" onChange={this.handleChange} value={this.state.name}></input>
                <label htmlFor="calories">Calories</label>
                <input type="number" min="0" step="1" name="calories" onChange={this.handleChange} value={this.state.calories}></input>
                <label htmlFor="image">Image</label>
                <input placeholder="image url" type="text" name="image" onChange={this.handleChange} value={this.state.image}></input>
                <button>Add Food</button>
            </form>
        ) : <div> </div >)
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({ showForm: true })} > Add Food</button>
                {this.showForm()}
            </div>
        );
    }
}

export default FoodBox;
