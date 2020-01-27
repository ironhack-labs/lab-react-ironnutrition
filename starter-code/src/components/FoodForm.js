import React, { Component } from 'react'

export default class FoodForm extends Component {
    constructor(){
        super();
        this.state={
            name: '',
            calories: 0,
            image: ''
        }
    }

  handleFormSubmit=(event)=>{
      event.preventDefault();
      this.props.addFood(this.state);
      this.setState({
          name: '',
          calories: '',
          image: ''
      })
  }

    handleChange=(event)=>{
        let{name, value}=event.target;
        this.setState({[name]: value})
        
    }

    render() {
        return (
           
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name: </label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />

                    <label>Calories: </label>
                    <input type="number" name="calories" value={this.state.calories} onChange={this.handleChange} />

                    <label>Image: </label>
                    <input type="url" name="image" value={this.state.image} onChange={this.handleChange}/>

                    <input type="submit" value="Submit" />
                </form>
            
        )
    }
}
