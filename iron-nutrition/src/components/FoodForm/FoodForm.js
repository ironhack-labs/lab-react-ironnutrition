import React, { Component } from 'react'

class FoodForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            calories: '',
            image: '',
            quantity: '',
        
        }
    }

    handleSubmit = e => {
        e.preventDefault()


        this.props.addFood(this.state) 

        this.setState({                 
            name: '',
            calories: '',
            quantity: '',
            image: '',
        })
    }

    handleInputChange = e => {

        let { name } = e.target
const value = e.target.value
        this.setState({ [name]: value })
    }


    render (){



        return (

    <form onSubmit={this.handleSubmit}>

                <label>Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                <br /><br />

                <label>Calories:</label>
                <input type="text" name="calories" value={this.state.calories} onChange={this.handleInputChange} />
                <br /><br />

                <label>Quantity</label>
                <input type="text" name="quantity" value={this.state.quantity} onChange={this.handleInputChange} />
                <br /><br />

                <label>Image</label>
                <input type="text" name="image" value={this.state.image} onChange={this.handleInputChange} />
                <br /><br />

                <input type="submit" value="Submit" />
            
            </form>

        )

        }
    }
    export default FoodForm;