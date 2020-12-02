import 'bulma/css/bulma.css';
import React, { Component } from 'react'


class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            calories: 0,
            image: '',
            quantity: 0
        }
    }

    inputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    sendForm = e => {
        e.preventDefault()
        this.props.addFood(this.state)
        this.props.hideForm()
        this.setState({
            name: '',
            calories: 0,
            image: '',
            quantity: 0
        })
    }

    render() {
        return (
            <form onSubmit={this.sendForm} >
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" name="name" value={this.state.name} onChange={this.inputChange} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Calories</label>
                    <div className="control">
                        <input className="input" type="text" name="calories" value={this.state.calories} onChange={this.inputChange} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Image</label>
                    <div className="control">
                        <input className="input" type="text" name="image" value={this.state.image} onChange={this.inputChange} />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        {/* <input type="submit" value="Submit" className="button is-link"/> */}
                    </div>
                </div>
            </form>
        )
    }
}

export default Form