import React, { Component } from 'react'

class FoodForm extends Component {
    state = {
        name: "",
        calories: 0,
        image: "https://i.imgur.com/eTmWoAN.png",
        quantity: 0
    }

    handleInput = (event) => {
        let {name, value} = event.target;
        this.setState({ [name]: value }) // this name is now the name in input
    }

    handleSubmit = (e) => { // this is called on the form tag itself!! not the button!!!! you can submit by hitting enter or button
        e.preventDefault()
        const newFood = this.state
        this.props.addFood(newFood)
        //reset form text:
        this.setState( {
            name: "",
            calories: 0,
            image: "https://i.imgur.com/eTmWoAN.png",
            quantity: 0
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleInput} /> 
                    <br/>

                    <label>Calories (in kcal) </label>
                    <input type="number" name="calories" value={this.state.calories} onChange={this.handleInput} />
                    <br/>

                    <label>Image as url</label>
                    <input type="text" name="image" value={this.state.image} onChange={this.handleInput} />
                    <br/>
                    <button type="submit">Add new food</button>
                </form>
                
            </div>
        )
    }
}

export default FoodForm
