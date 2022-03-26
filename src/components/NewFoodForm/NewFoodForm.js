import React, { Component } from 'react'
import './NewFoodForm.css'

const originalState = {
    name: '',
    calories: '',
    image: '',
    quantity: 0
}

class NewFoodForm extends Component {
    state = {...originalState}

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { name, calories, image, quantity } = this.state
        console.log(this.state)
        
        if (name && Number(calories) > 1 && image) {
            this.props.addFood({
                name,
                calories: Number(calories),
                image,
                quantity
            })
            this.props.showForm()
        }
    }

    render() {
        const { name, calories, image } = this.state

        return (
            <div className="form">
                <h2>Add a new food</h2>
                <form onSubmit={this.handleSubmit}> 
                    <div className="field">
                        <label htmlFor="name" className="label">Name</label>
                        <div className="control">
                            <input 
                                value={name}
                                name="name"
                                id="name"
                                onChange={this.handleChange}
                                className="input"
                                type="text"
                                placeholder="e.g Pizza"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label htmlFor="calories" className="label">Calories</label>
                        <div className="control">
                            <input 
                                value={calories}
                                name="calories"
                                id="calories"
                                onChange={this.handleChange}
                                className="input"
                                type="number"
                                min={1}
                                placeholder="e.g. 400"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label htmlFor="image" className="label">Image</label>
                        <div className="control">
                            <input
                                value={image}
                                name="image"
                                id="image"
                                onChange={this.handleChange}
                                className="input"
                                type="text"
                                placeholder="e.g. https://image"
                            />
                        </div>
                    </div>

                    <button className="button is-info mt-4">Submit</button>
                </form>
            </div>
        )
    }
}

export default NewFoodForm