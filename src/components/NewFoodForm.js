import { Component } from 'react'

class NewFoodForm extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            calories: '',
            image: '',
            quantity: ''
        }
    }

    handleInputChange(e) {
        const name = e.target.name
        const value = e.target.value
        this.setState({ [name]: value })
    }

    handleSubmitForm(e) {
        e.preventDefault()
        const newFood = this.state
        this.props.addFood(newFood)

        this.emptyForm()
    }

    emptyForm() {
        this.setState({ name: '', calories: '', image: '', quantity: '' })
    }

    render() {
        return (
            <>
                <form onSubmit={e => this.handleSubmitForm(e)}>
                    <label>
                        Name <input type="text" name="name" value={this.state.name} onChange={e => this.handleInputChange(e)} />
                    </label>
                    <label>
                        Calories <input type="text" name="calories" value={this.state.calories} onChange={e => this.handleInputChange(e)} />
                    </label>
                    <label>
                        Image <input type="text" name="image" value={this.state.image} onChange={e => this.handleInputChange(e)} />
                    </label>
                    <label>
                        Quantity <input type="number" name="quantity" value={this.state.quantity} onChange={e => this.handleInputChange(e)} />
                    </label>

                    <input type="submit" value="Add New Food"></input>
                </form>
            </>
        )
    }
}

export default NewFoodForm