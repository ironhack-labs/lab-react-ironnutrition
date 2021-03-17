import React, { Component } from 'react'

export class FoodForm extends Component {

    state = { 
        name: "",
        calories: 0,
        image: "https://tastesbetterfromscratch.com/wp-content/uploads/2015/11/Berry-Pie-4-2.jpg",
        quantity: 0, 
    }
    

    handleChange = event => {
        // const value = event.target.type === "checkbox" ? event.target.clicked : event.target.value;
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newFood = {
            name: this.state.name,
            calories: Number(this.state.calories),
            image: this.state.image,
            quantity: Number(this.state.quantity),}
        this.props.add(newFood)
        this.setState({
            name: "",
            calories: 0,
            image: "",
            quantity: 0, 
        })

    }

   

    render() {

        return (
            
            <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input onChange={this.handleChange} value={this.state.name}  id="name" type="text" name="name"/>
            </div>
            <div>
                <label htmlFor="calories">Calories</label>
                <input onChange={this.handleChange} value={this.state.calories}  id="calories" type="number" name="calories"/>
            </div>
            <div>
                <label htmlFor="image">ImageURL</label>
                <input onChange={this.handleChange} value={this.state.image}  id="image" type="text" name="image"/>
            </div>
            <button>submit</button>
            </form>
        )
    }
}

export default FoodForm
