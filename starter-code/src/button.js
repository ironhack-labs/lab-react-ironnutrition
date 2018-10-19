import React, { Component } from "react";
import './App.css';
import food from './foods.json';


class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayForm: false,
            name: '',
            calories: '',
            picture: ''

        }
    }


    FormDisplay = () => {
        this.setState({
            displayForm: !this.state.displayForm
        })
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }

    FormSubmit = (e) => {
        this.props.AddFoodItems(this.state)
        this.setState({
            name: '',
            calories: '',
            picture: ''
        })
    }

    FormDisplaySubmit = () => {
        this.FormDisplay()
        this.FormSubmit()
    }

    render() {
        return (
            <div>
                <button onClick={this.FormDisplay}>Add New Food</button>{
                    this.state.displayForm ? <form>
                        <input type='text' name="name" placeholder="Enter the aliment name" value={this.state.name} onChange={(e) => this.handleChange(e)}></input>
                        <input type='text' name="calories" placeholder="Enter the calories numbers" value={this.state.calories} onChange={(e) => this.handleChange(e)}></input>
                        <input type='text' name="picture" placeholder="Add an image" value={this.state.picture} onChange={(e) => this.handleChange(e)}></input>
                        <button type='button' onClick={this.FormDisplaySubmit}>SUBMIT</button>
                    </form> : ''
                }

            </div>
        )

    }
}

export default Button;