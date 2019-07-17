import React, { Component } from 'react'

export default class FormFood extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            calories:"",
            image:"",
            quantity:0,
        }
    }

    addFood(e,field){
        let newState = {...this.state};
        newState[field] = e.target.value;
        this.setState(newState);
    }

    sendFood(e){
        e.preventDefault();
        let newFood = this.state;
        this.props.confirmFoodHandler(newFood);
    }

    render() {
        return (
            <form className="toggle">
                <input type="text" placeholder="Write name" defaultValue={this.state.name} onChange={(e) => this.addFood(e,"name")}></input>
                <input type="text" placeholder="Write calories" defaultValue={this.state.calories} onChange={(e) => this.addFood(e,"calories")}></input>
                <input type="text" placeholder="Select image URL" defaultValue={this.state.image} onChange={(e) => this.addFood(e,"image")}></input>
                <button onClick={(e) => this.sendFood(e)}>Add new food!</button>
            </form>
        )
    }
}
