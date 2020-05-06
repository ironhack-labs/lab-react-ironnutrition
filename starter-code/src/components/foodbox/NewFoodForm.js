import React,{ Component} from 'react'

class NewFoodForm extends Component {

    constructor() {
        super()
        this.state = {
        name: "",
        calories: "",
        image: "",
        quantity: ""
        }
    }

handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleFormSubmit = e => {
    e.preventDefault()
    this.props.createFood(this.state)
    
}
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>
                    Food name
                    <input name="name" value={this.state.name} onChange={this.handleChange} type="text" />
                </label>
                <br />
                <label>
                    Calories
                    <input name="calories" value={this.state.calories} onChange={this.handleChange} type="text" />
                </label>
                <br />
                <label>
                    Image
                    <input name="image" value={this.state.image} onChange={this.handleChange} type="text" />
                </label>
                <br />
                <label>
                    Quantity
                    <input name="quantity" value={this.state.quantity} onChange={this.handleChange} type="number" />
                </label>
                <br />
                <input type="submit" value="Añadir una nueva comida" />
            </form>
        )
    }

}

export default NewFoodForm