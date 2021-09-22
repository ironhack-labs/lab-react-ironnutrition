import React, { Component } from 'react'

export default class AddFood extends Component {
    state = {
        name: "",
        calories: 0,
        image: "",
        quantity: 0,
        isActive: false

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addFood(this.state);
        this.setState({
            name: "",
            calories: 0,
            image: "",
            quantity: 0,
            isActive: false
        })
    }
    handleChange = (e) => {

        const { value, name } = e.target;
        // const newValue = type === "checkbox" ? checked : value;

        this.setState({
            ...this.state,
            [name]: value
        })
    }
    toggleIsActive = (e) => {
        e.preventDefault()
        console.log(!this.state.isActive)
        this.setState({
            ...this.state,
            isActive: !this.state.isActive
        })
    }

    render() {
        return (
            <div>
                <div className="column" style={{ padding: 50 }}>
                    {
                        this.state.isActive &&
                        <form onSubmit={(e) => this.handleSubmit(e)}>

                            <label>
                                Name: <input type="text" value={this.state.name} name="name" onChange={e => this.handleChange(e)} />
                            </label>

                            <label>
                                Calories: <input type="number" name="calories" value={this.state.calories} onChange={e => this.handleChange(e)} />
                            </label>

                            <label>
                                Image: <input type="text" name="image" value={this.state.image} onChange={e => this.handleChange(e)} />
                            </label>
                            <input type="submit" value="submit" />
                        </form>
                    }
                    {
                        !this.state.isActive &&
                        <a onClick={this.toggleIsActive} >Create food</a>
                    }
                </div>
            </div>
        )
    }
}
