

import React, { Component } from 'react'

export default class FoodAdd extends Component {
    state={
        name: "",
        calories: "",
        image:"",
        showForm: false
    }
    handleSubmit = evt=>{
        evt.preventDefault()   
        this.props.clbk(this.state);
    }

    handleChange =evt=>{
        this.setState({[evt.target.name]: evt.target.value})
    }
    makesFormAppear =evt=>{
        this.setState({showForm: true})
    }
    
    render() {
        console.log(this.state.showForm)
        return !this.state.showForm ? (
            
            <button onClick={this.makesFormAppear}>Add new food</button>
        ):
        (
            <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
            <input name="name" type="text"/>
            <input name="calories" type="text"/>
            <input name="image" type="file"/>
            <button>Add food</button>
        </form>
        )
    }
}
