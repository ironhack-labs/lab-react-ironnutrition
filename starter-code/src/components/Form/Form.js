import React, { Component } from 'react';
import 'bulma/css/bulma.css'


class AddFood extends Component {

    constructor(props) {
        super(props)
        this.state = {
            food: {
                name: '',
                calories: '',
                image: '',
                quantity: ''
            },

        }
    }


    handleChange = e => {
        let { name, value } = e.target

        this.setState({
            food: {
                ...this.state.food,
                [name]: value
            }
        })
    }


    handleSubmit = e => {
        e.preventDefault()

        this.props.addNewFood(this.state.food)
        this.setState({
            food: {
                name: '',
                calories: '',
                image: '',
                quantity: ''
            },
        })
    }

    render() {
        return (
            <div>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" name="name" onChange={this.handleChange} />

                    </div>
                </div>
                <div className="field">
                    <label className="label">Calories</label>
                    <div className="control">
                        <input className="input" type="text" name="calories" onChange={this.handleChange} />

                    </div>
                </div>
                <div className="field">
                    <label className="label">Image</label>
                    <div className="control">
                        <input className="input" type="text" name="image" onChange={this.handleChange} />

                    </div>
                </div>
                <div className="field">
                    <label className="label">Quantity</label>
                    <div className="control">
                        <input className="input" type="text" name="quantity" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="control">
                    <button onClick={this.handleSubmit} className="button is-primary">Submit</button>
                </div>
            </div>
        )
    }
}

export default AddFood