import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import paella from './paella.jpg'

class NewFood extends Component {
    constructor() {
        super()
        this.state = {
            foodName: '',
            calories: '',
            image: paella,
            quantity: '',
        }

        this.imgStyle = { width: '30%' }
    }

    handleInputChange = event => {

        let { name } = event.target
        let value = event.target.value
        this.setState({ [name]: value })
    }

    handleSubmit = event => {

        event.preventDefault()

        this.props.addNewFood(this.state)

        this.setState({
            foodName: '',
            calories: ''
        })
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>

                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" name="foodName" value={this.state.foodName} onChange={this.handleInputChange} placeholder="e.g Alex Smith" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">calories</label>
                    <div className="control">
                        <input className="input" type="number" name="calories" value={this.state.calories} onChange={this.handleInputChange} placeholder="eg 1,2,3" />
                    </div>
                    <img src={paella} style={this.imgStyle}></img>
                    <br />
                    <br />
                </div>
                <div className="control">
                    <button className="button is-primary" value="submit" >Submit</button>
                </div>
            </form>
        )
    }
}

export default NewFood