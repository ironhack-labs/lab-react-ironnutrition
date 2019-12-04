import React, { Component } from 'react'

export default class Form extends Component {

    state = {
        name: '',
        calories: 0,
        image:''
    }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addFood(this.state);
    this.setState({ name: '', calories: 0, image:''});  	
  };

  handleChange(event) {
    event.preventDefault();
    // All our inputs have same `name` as the `state` property name.
    let { name, value } = event.target;

    this.setState( { [name]: value } );
  }


  render(){
    return (
      <div>
      {
          this.props.toggle
            ?<form onSubmit={this.handleFormSubmit}>
                    <label>Name:</label>
                    <input name="name" type="text" value={this.state.name} onChange={(e) => this.handleChange(e)} />

                    <label>Calories:</label>
                    <input name="calories" type="number" value={this.state.calories} onChange={(e) => this.handleChange(e)} />

                    <label>Image URL:</label>
                    <input name="image" type="text" checked={this.state.image} onChange={(e) => this.handleChange(e)} />
                    
                    <button type="submit"> Submit </button>
                </form>
                :null
      }
      </div>
        )
    }
}
