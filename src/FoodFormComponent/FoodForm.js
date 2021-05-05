import { Component } from "react";

class FoodForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            calories: '',
            rating: '',
            image: ''
        }
    }

    handleInputChange(e) {
        const name = e.target.name
        const value = e.target.value

        // Computed property names
        this.setState({ [name]: value })
    }

    handleSubmitForm(e) {
        e.preventDefault()
        const theFood = this.state
        this.props.addFood(theFood)

        this.emptyForm()
    }

    emptyForm() {
        this.setState({
            name: '',
            calories: '',
            rating: '',
            image: ''
        })
    }

    render() {
        return (
            <div>
                <h4>Crear alimento</h4>

                <form className="form" onSubmit={e => this.handleSubmitForm(e)}>
                    <label>
                        Name <input type="text" name="name" value={this.state.name} onChange={e => this.handleInputChange(e)} />
                    </label>
                    <label>
                        Calories <input type="text" name="calories" value={this.state.calories} onChange={e => this.handleInputChange(e)} />
                    </label>
                    <label>
                        Rating <input type="text" name="rating" value={this.state.rating} onChange={e => this.handleInputChange(e)} />
                    </label>
                    <label>
                        Image <input type="text" name="image" value={this.state.image} onChange={e => this.handleInputChange(e)} />
                    </label>


                    <input type="submit" value="Crear nueva comida"></input>

                </form>
            </div>
        )
    }
}

export default FoodForm