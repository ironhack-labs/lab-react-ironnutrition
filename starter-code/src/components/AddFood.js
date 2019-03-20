import React, { Component } from 'react';

class AddFood extends Component {

    constructor(props) {

        super(props)

        this.state = {
           name: "",
           calories: "",
           image: "https://www.motorolasolutions.com/content/dam/msi/images/products/accessories/image_not_available_lg.jpg",
           quantity: 0
        }
    }
    
    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.props.addFood(this.state)
        this.setState({
            name: "nombre",
            calories: "",
            image: "https://www.motorolasolutions.com/content/dam/msi/images/products/accessories/image_not_available_lg.jpg",
            quantity: 0
        })
    }

    render() {
        return (
                <form onSubmit={(e) => this.handleFormSubmit(e)}>
                    <label>Nombre:</label>
                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} /><br /><br />

                    <label>Calories:</label>
                    <input type="number" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)} /><br /><br />

                    <label>URL de la imagen:</label>
                    <input type="text" name="image" checked={this.state.image} onChange={(e) => this.handleChange(e)} /><br /><br />

                    <label>Quantity:</label>
                    <input type="number" name="quantity" value={this.state.quantity} onChange={(e) => this.handleChange(e)} /><br /><br />

                    <input type="submit" value="Submit" />
                </form>
        )
    }
}

export default AddFood