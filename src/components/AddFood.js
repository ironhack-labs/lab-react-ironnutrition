import React, { Component } from 'react';

class AddFood extends Component {
    state = {
        foodName: "Add new food",
        calories: 0,
        img: ""
    }

    handleChange = (e) => {
        let {name, value, type } = e.target;
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            foodName: "Add new food",
            calories: 0,
            img: ""
        })
    }

    render() {
        return (
            <div className="box">
            <h2><b>Create New Food</b></h2>
            <form onSubmit={this.handleSubmit}>
                <label>Food Name</label>
                <input className="input mb-2" value={this.state.foodName} type="search" onChange={(e) => this.handleChange(e)}/>
                
                <label>Number of calories</label>
                <input className="input mb-2" type="number" onChange={(e) => this.handleChange(e)}/>

                <label>Add picture</label>
                <input className="input mb-2" type="image" onChange={(e) => this.handleChange(e)}/>

                <button className="button is-primary mt-2">Add new Food</button>
            </form>
            </div>
        )
    }
}

export default AddFood;