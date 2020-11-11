import React, { Component } from 'react'

class AddNewFood extends Component {
    state = {
        name: "",
        calories: 0,
        image: "",
        showForm: false,
    }

    handleChange = event => {
        let { name, value } = event.target
        this.setState({ [name]: value })
    };

    handleFormSubmit = event => {
        event.preventDefault()

        this.props.addNewFood(this.state)

        this.setState({
            name: "",
            calories: 0,
            image: "",
            showForm: false,
        })

    }

    showThisForm = () => {
        this.setState({
          showForm: !this.state.showForm
        })
      }


    render() {
        return (
            <>
                    {!this.state.showForm ? (
                        <button onClick={() => this.showThisForm()}>
                            "Add new Food"
                        </button> 
                    ) : (
                    <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="">Name: </label>
                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />

                    <label htmlFor="">Number of Calories:</label>
                    <input type="number" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)} />

                    <label htmlFor="">Img:</label>
                    <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)} />

                    <input type="submit" value="Submit" />
                    </form>
                    )
                }
            </>
        )
    }
}

export default AddNewFood;
