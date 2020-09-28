import React, {Component} from 'react'
import Button from './Button'

class FoodForm extends Component {
    state = {
        name: '',
        calories: 0,
        image: ''
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmitFood = (event) => {
        console.log(this.state)
        event.preventDefault()
        this.props.onSubmit(this.state)
    }

    render() {
        // const isFormValid = this.state.name && this.state.calories > 0 && this.state.image

        const isFormValid = Object.values(this.state).every((value) => value)

        return (
            <div className="form">
                <form onSubmit={this.onSubmitFood}>
                    <label htmlFor="name">Food name</label>
                    <input className="input" name="name" placeholder="Food name" onChange={this.handleOnChange} value={this.state.name} />
                    <label htmlFor="calories">Food calories</label>
                    <input type="number" min={0} className="input" name="calories" placeholder="Food calories" onChange={this.handleOnChange} value={this.state.calories} />
                    <label htmlFor="image">Food image URL</label>
                    <input className="input" name="image" placeholder="Food image url" onChange={this.handleOnChange} value={this.state.image} />

                    <Button className="button is-primary" disabled={!isFormValid}>Add new food</Button>
                </form>
            </div>
        )
    }
}

export default FoodForm