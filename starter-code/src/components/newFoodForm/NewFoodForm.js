import React, { Component } from 'react'
import 'bulma/css/bulma.css'


class NewFoodForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            food: { name: '', calories: '', image: '', quantity: 0 }

        }
    }

    handleChanges = e => {

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
        this.props.newFood(this.state.food)

        this.props.unShowForm()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="field">
                    <label className="name">Name</label>
                    <div className="control" onChange={this.handleChanges}>
                        <input className="input" name='name' type="text" placeholder="Text input" />
                    </div>
                    <p className="help">This is a help text</p>
                </div>

                <div className="field">
                    <label className="calories">Number of Calories</label>
                    <div className="control" onChange={this.handleChanges}>
                        <input className="input" name='calories' type="text" placeholder="Text input" />
                    </div>
                    <p className="help">This is a help text</p>
                </div>


                <div className="field">
                    <label className="image">Image Path</label>
                    <div className="control" onChange={this.handleChanges}>
                        <input className="input" name='image' type="text" placeholder="Text input" />
                    </div>
                    <p className="help">This is a help text</p>
                </div>
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>

            </form>
        )

    }

}

export default NewFoodForm
