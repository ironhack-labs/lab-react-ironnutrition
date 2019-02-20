import React, { Component } from 'react';

export default class FoodForm extends Component {
    constructor(){
        super();
        this.state = {
            close:true
        }
    }

    clickHandle = e => {
        e.preventDefault();
        this.setState({
            close:!this.state.close
        })
    }

    handleNameState = (e)=>{
        this.setState({
            ...this.state,
            name:e.target.value
        })
    }

    handleCaloriesState = (e)=>{
        this.setState({
            ...this.state,
            calories:+e.target.value
        })
    }

    handleImageState = (e)=>{
        this.setState({
            ...this.state,
            image:e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.setState({
            ...this.state,
            close:true
        })
        this.props.handleFormSubmit(this.state)
    }

    render(){
        return (
           <div className="FoodForm">
            <button onClick={e=>this.clickHandle(e)}>New Food Form</button>
            <form style={{"display":this.state.close?"none" : "block"}} onSubmit={this.handleFormSubmit}>
                <input type="text" name="name" placeholder="food name" onChange={this.handleNameState}></input>
                <input type="number" name="calories" placeholder="calories" onChange={this.handleCaloriesState}></input>
                <input type="text" name="image" placeholder="img url" onChange={this.handleImageState}></input>

                <button>Add</button>
            </form>
           </div>
        )
    } 

}