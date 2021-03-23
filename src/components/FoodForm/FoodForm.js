import React, { Component } from 'react'
import './FoodForm.css'

 class FoodForm extends Component {
    state = {
        showForm: false,
        newFood: {
            name: "",
            calories: "",
            image: ""
        }
    }

    handleDrawForm () {
        // On click we change our state – this will trigger our `render` method
        this.setState({ showForm: true });
    }

    handleChange = (e) => {
        let value = e.target.value;
        const newFood = this.state.newFood
        newFood[e.target.id] = value
        //console.log(newFood)
        this.setState({ newFood });
    };
     
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.newFood)
    }

    render() {
        return (
            <div className="FoodForm">
                <button onClick={this.handleDrawForm.bind(this)} className="button">Add Food</button>
                {
                this.state.showForm && 
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input id="name" name="name" value={this.state.newFood.name} onChange={this.handleChange}/>

                    <label htmlFor="calories">Calories: </label>
                    <input id="calories" name="calories" value={this.state.newFood.calories} onChange={this.handleChange}/>


                    <label htmlFor="image">Image: </label>
                    <input id="image" name="image" value={this.state.newFood.image} onChange={this.handleChange} />

                    <button> Submit</button>

                </form>
                }
            </div>
        )
    }

}



export default FoodForm


