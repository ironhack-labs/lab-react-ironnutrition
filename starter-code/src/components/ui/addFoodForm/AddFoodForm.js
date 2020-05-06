import React, { Component } from 'react'


    class AddFoodForm extends Component {

        constructor(props) {
            super(props)
            this.state = {
                name: '',
                calories: '',
                image: ''
            }
        }

        handleChange = e => {

            const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    
            this.setState({
                [e.target.name]: value
            })
        }
    
        handleFormSubmit = e => {
            e.preventDefault()
    
    
            this.props.addMovie(this.state)
            this.setState({
                title: '',
                director: '',
                hasOscars: false
            })
        }

        render() {
            return (
                <form onSubmit={this.handleFormSubmit}>
                    <label>
                        Name:
                        <input name="title" value={this.state.name} onChange={this.handleChange} type="text" />
                    </label>
                    <br />
                    <label>
                        Calories:
                        <input name="director" value={this.state.calories} onChange={this.handleChange} type="number" />
                    </label>
                    <br />
                    <label>
                        Image:
                        <input name="hasOscars" checked={this.state.image} onChange={this.handleChange} type="file" />
                    </label>
                    <br />
                    <input type="submit" value="Añadir comida" />
                </form>
            )
        }
    }

export default AddFoodForm