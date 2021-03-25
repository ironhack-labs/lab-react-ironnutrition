import React, { Component } from 'react';

class AddFood extends Component {
    state = {
        name: "",
        calories: "",
        image: "",
        quantity: 0,
    }

    handleChange = (e) => {
        let {name, value } = e.target;
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createFood(this.state)
        
        this.setState({
            name: "",
            calories: "",
            image: "",
            quantity: 0,
        })
    }

    render() {
        return (
            <div className="box mt-3">
            <h2><b>Create New Food</b></h2>
            <form onSubmit={this.handleSubmit}>
                <input className="input mb-2" placeholder="Food Name" name="name" value={this.state.name} type="search" onChange={(e) => this.handleChange(e)}/>
                <input className="input mb-2" placeholder="Number of calories" name="calories" value={this.state.calories} type="number" onChange={(e) => this.handleChange(e)}/>
                <input className="input mb-2" placeholder="Add image url" name="image" value={this.state.image} type="url" onChange={(e) => this.handleChange(e)}/>
                <button className="button is-primary mt-2">Add</button>
            </form>
            </div>
        )
    }
}

export default AddFood;