import React, { Component } from 'react'

export default class AddFood extends Component {
    constructor (props) {
        super(props)
    }
    
    
        state = {
            name: '',
            image: '',
            calories: '',
            quantity: ''
        }
        
        handleFormSubmit = (event) => {
        
            event.preventDefault();
            this.props.addTheFood(this.state);
            this.setState({
              name: "",
              iamge: "",
              calories: "",
              quantity: ""
            })
        }

        handleChange = (event) => {
            let { name, value } = event.target;
            this.setState ({[name]: value })
        }
    

    render() {
        return (
            <div>
            <form onSubmit={this.handleFormSubmit}>
          <label>Name</label>
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />

          <label>Image:</label>
          <input
            type='text'
            name='image'
            value={this.state.image}
            onChange={e => this.handleChange(e)}
          />

          <label>Calories:</label>
          <input
            type='text'
            name='calories'
            checked={this.state.calories}
            onChange={e => this.handleChange(e)}
          />

          <label>Quantity:</label>
          <input
            type='number'
            name='quantity'
            value={this.state.quantity}
            onChange={e => this.handleChange(e)}
          />

          <input type='submit' value='Submit' />
        </form>
                
            </div>
        )
    }

}