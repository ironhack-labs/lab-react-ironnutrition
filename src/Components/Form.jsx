import React, { Component } from "react";

class Form extends Component {
    state = {
        name: "",
        calories: "",
        image: ""
    }

    handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name

        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({
            name: "",
            calories: "",
            image: ""
        })

        this.props.myProp({
            name: this.state.name,
            calories: this.state.calories,
            image: this.state.image,
        })
    }
    
    render() {

        return (
        <form onSubmit={this.handleSubmit}>
            <div>
            <label htmlFor="name">Type</label><br/>
            <input id="name" type="text" name="name" onChange={this.handleChange} value={this.state.name}></input>
            </div>

            <div>
            <label htmlFor="calories">Calories</label><br/>
            <input id="calories" type="text" name="calories" onChange={this.handleChange} value={this.state.calories}></input>
            </div>

            <div>
            <label htmlFor="image">Image</label><br/>
            <input id="image" type="text" name="image" onChange={this.handleChange} value={this.state.image}></input>
            </div>
            <button>Add</button>
        </form>
        )
    }

}

export default Form;
