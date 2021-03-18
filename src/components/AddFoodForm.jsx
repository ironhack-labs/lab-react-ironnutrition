import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export class AddFoodForm extends Component {
    state = {
        isClicked: false,
        name: "",
        calories: "",
        image: ""
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name] : value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        this.props.addFood({
            name: this.state.name,
            calories: this.state.calories,
            image: this.state.image,
            quantity: 0
        })

        this.setState({
            name: "",
            calories: "",
            image: ""
        })
    } 

    render() {
        return (
            <div>
                <button 
                    onClick={() => this.setState({isClicked: !this.state.isClicked})}
                    className="button is-info"
                >
                    Add Food
                </button>

                {this.state.isClicked ?                 
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.name}
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="food name"
                    />

                    <label htmlFor="calories">Calories</label>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.calories}
                        type="text" 
                        name="calories" 
                        id="calories" 
                        placeholder="food calories"
                    />

                    <label htmlFor="image">Image</label>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.image}
                        type="text" 
                        name="image" 
                        id="image" 
                        placeholder="food image link"
                    />

                    <button className="button is-info">Create</button>
                </form> : 
                ""}
            </div>
        )
    }
}

export default AddFoodForm
