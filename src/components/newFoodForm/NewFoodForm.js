import React, {Component} from 'react';

class NewFoodForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            calories: '',
            image: '',
            quantity: 0
        }
    }

    handleInputChange = e => {
        let { name, value} = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addFood(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="field">
                    <label className = "label" > Name: </label>
                    <div className="control">
                        <input className="input" type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                    </div>
                </div>
              
                <div className="field">
                    <label className = "label" >Calories :</label>
                    <div className="control">
                        <input className="input" type="text" name="calories" value={this.state.calories} onChange={this.handleInputChange} />
                    </div>
                </div>

                <div className="field">
                    <label className = "label" > Image URL: </label>
                    <div className="control">
                        <input className="input" type="text" name="image" value={this.state.image} onChange={this.handleInputChange} />
                    </div>
                </div>

                <input type="submit" value="Submit" className="button is-link"/>
            </form>
        )
    }
}

export default NewFoodForm