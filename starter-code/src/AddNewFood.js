import React, { Component } from 'react'

export default class AddNewFood extends Component {

    state = {
        name: "",
        calories: "",
        image: ""
    }


    handleChange = e => {
        let {name, value} = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();
        const newFood = this.state

        // call the function in the parent
        this.props.addNew(newFood)

        this.setState({
            name: "",
            calories: "",
            image: ""
        })

    }


    render() {
        return (
            <div>
                
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label>Calories</label>
          <input
            type="text"
            name="calories"
            value={this.state.calories}
            onChange={this.handleChange}
          />

          <label>Image</label>
          <input
            type="text"
            name="image"
            checked={this.state.image}
            onChange={this.handleChange}
          />

          <button type="submit"> Submit </button>
        </form>

            </div>
        )
    }
}
