import React, { Component } from 'react'
import 'bulma/css/bulma.css'

class FoodNewForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            calories: '',
            image: '',
            
        }
    }

    handleforSubmit = e => {
        e.preventDefault()
        this.props.insertFood(this.state)
        this.setState({
            name: '',
            calories: '',
            image: '',
            newFood: !this.state.newFood
        })
    }

    handleInputChange = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState({ [name]: value })
    }
    


    render() {
        return (
            <>
                <form onSubmit={this.handleforSubmit}> 
                    <label className="label">
                        Name:
                        <div className="control">
                        <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
                        </div>
                    </label> <br></br>

                    <label className="label">
                        Calories:
                        <div className="control">
                        <input name="calories" type="number" value={this.state.calories} onChange={this.handleInputChange} />
                        </div>
                    </label><br></br>

                    <label className="label">
                        Image:
                        <div className="control">
                        <input name="image" type="text" value={this.state.image} onChange={this.handleInputChange} />
                        </div>
                    </label><br></br>

                    <br></br><br></br>

                    <button className="button is-link" onClick={this.viewForm}>Create!</button>
                </form>
            </>

        )
    }
}

export default FoodNewForm