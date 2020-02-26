import React, { Component } from 'react';
import shortid from "shortid";

export default class AddFood extends Component {
    state = {
        id:"",
        name: "Patatas Bravas",
        calories: 600,
        image: "https://www.cocinacaserayfacil.net/wp-content/uploads/2018/02/patatas-bravas-receta.jpg",
        quantity: 0
    }
    handleChange = e => {
        let { value, name  } = e.target;
        this.setState({ [name]: value });
    };
    
    handleSubmit = e => {
        e.preventDefault();
    
        const newFood = this.state;
        newFood.id = shortid.generate();
    
        this.props.addFood(newFood);
    
        this.setState({
            id:"",
            name: "",
            calories: 0,
            image: "",
            quantity: 0
        });
      };

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
                    <label>Image Link</label>
                    <input
                        type="text"
                        name="image"
                        value={this.state.image}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Add food</button>
                </form>
            </div>
        )
    }
}
