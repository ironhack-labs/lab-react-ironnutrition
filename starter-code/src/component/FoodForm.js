import React, { Component } from 'react';

import './FoodForm.css';

import 'bulma/css/bulma.css';


class FoodBox extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: "",
            calories: "",
            picture: "",
        };
    }

    genericOnchange(event){

        const{value, name} = event.target;

        this.setState({[name]: value})
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.mealSubmit(this.state)

        this.setState({
            name: "",
            calories: "",
            picture: "",
        })
    }
    
    render() {
      
      return (
            <section clasName="form">
                <form onSubmit={event =>this.handleSubmit(event)}>
                <label>
                name:
                    <input onChange={event => this.genericOnchange(event)} class="input is-primary" 
                    type="text" value={this.state.name} name="name" placeholder="Primary input"></input>
                </label>
                <label>
                Number of calories:
                    <input onChange={event => this.genericOnchange(event)} class="input is-primary" 
                    type="text" value={this.state.calories} name="calories"placeholder="Primary input"></input>
                </label>
                <label>
                image:
                    <input onChange={event => this.genericOnchange(event)} class="input is-primary" 
                    type="text" value={this.state.picture} name="picture" placeholder="Primary input"></input>    
                </label>
                <button class="button is-primary">Add Meal</button>
                </form>
            </section>
      );
    }
}

export default FoodBox;