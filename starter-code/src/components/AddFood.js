import React, { Component } from 'react'

export default class AddFood extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            calories: '',
            image: '',
            quantity: 0,
            showForm: false
        }
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addFood(this.state);
        this.setState({
          showForm: false,
          name: '',
          calories: '',
          quantity: 0,
          image: ''
        })
    }
    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({ [name]: value})
    }
    showForm = () => {
        this.setState({showForm : !this.state.showForm});
      }
    render() {
        if (!this.state.showForm) { return <button onClick={this.showForm}>Add Food</button>}
        else {
        return (
            <div>
                <button onClick={this.showForm}>Hide</button>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name:</label>
                    <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={e => this.handleChange(e)}
                    />
                    <label>Calories:</label>
                    <input
                        type='number'
                        name='calories'
                        value={this.state.calories}
                        onChange={e => this.handleChange(e)}
                    />
                    <label>Image:</label>
                    <input
                        type='text'
                        name='image'
                        value={this.state.image}
                        onChange={e => this.handleChange(e)}
                    />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )}
    }
}

