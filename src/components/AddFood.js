import React, { Component } from 'react'
export default class AddFood extends Component {
    state = {
        name: '',
        calories: 0,
        image: '',
        quantity: 0,
        visibility: false
    }
    handleChange = event => {
        let { name, value } = event.target
        this.setState({[name]: value})
    }
    handleFormSubmit = event => {
        event.preventDefault();
        this.props.addFood(this.state);
        this.setState({
            name: '',
            calories: 0,
            image: '',
            quantity: 0,
            visibility: false
        })
    }
    showThisForm = () => {
        this.setState({
            visibility: !this.state.visibility
        })
    }
    render() {
        return (
            <div>
                <div>
                {!this.state.visibility ? <button onClick={() => this.showThisForm()}>"Add New Food"</button>:
                    (<form onSubmit={this.handleFormSubmit}>
                        <label htmlFor="image">Image:</label> {/* Los value van a venir directamente del estado */}
                        <input type="text" name="image" id="image" value={this.state.image} onChange={(e) => this.handleChange(e)}/>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)}/>
                        <label htmlFor="calories">Calories:</label>
                        <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)}/>
                        <input type="submit" value="Submit"/>
                    </form>)}
                </div>
            </div>
        )
    }
}