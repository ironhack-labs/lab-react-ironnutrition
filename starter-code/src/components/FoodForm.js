import React, { Component } from 'react';

export default class FoodForm extends Component {
    state ={
        name: "",
        image: "",
        quantity: "",
        calories: ""
    }

    handleChange = e =>{
        let {value, name} = e.target;
        console.log("kfjdlsjdf");
        this.setState({[name]: value});
    }

    handleSubmit = e =>{
        e.preventDefault();
        const newFood = this.state;
        //newFood.id = this.props.secretCode;

        this.props.addFood(newFood);

        this.setState({
            name: "",
            image: "",
            quantity: "",
            calories: ""
        });
        this.props.toggle();
    }
    render() {
        return (
            <div>
                <form onSubmit= {this.handleSubmit}>
                    <label> name</label>
                    <input
                        type="text"
                        name = "name"
                        value = {this.state.name}
                        onChange={this.handleChange}
                    />
                    <label> calories</label>
                    <input
                        type="text"
                        name = "calories"
                        value = {this.state.calories}
                        onChange={this.handleChange}
                    />
                    <label>image</label>
                    <input
                        type="text"
                        name = "image"
                        value = {this.state.image}
                        onChange={this.handleChange}
                    />
                    <button type="submit"> Submit</button>
                </form>
            </div>
        )
    }
}
