import React from 'react';
import './Form.css';
import Button from '../Button/Button.jsx'

export default class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            calories: "",
            image: ""
        }
        this.changeNameHandler = this.changeNameHandler.bind(this)
        this.changeCaloriesHandler = this.changeCaloriesHandler.bind(this)
        this.changeImageHandler = this.changeImageHandler.bind(this)
    }
    changeNameHandler = (e) => {
        this.setState({ ...this.state, name: e.target.value })
    }
    changeCaloriesHandler = (e) => {
        this.setState(
            { ...this.state, calories: e.target.value }
        )
    }
    changeImageHandler = (e) => {
        this.setState(
            { ...this.state, image: e.target.value }
        )
    }

    render() {
        return (
            <div style={this.props.style} className="Form">
                <form onSubmit={e => this.props.addFood(e, this.state)}>
                    <input type="text" name="name" placeholder="Pizza" onChange={(e) => this.changeNameHandler(e)} />
                    <input type="text" name="calories" placeholder="456cal" onChange={(e) => this.changeCaloriesHandler(e)} />
                    <input type="text" name="image" placeholder="https://yourimage.com" onChange={(e) => this.changeImageHandler(e)} />
                    <Button>Add food</Button>
                </form>
            </div>
        );
    }
}