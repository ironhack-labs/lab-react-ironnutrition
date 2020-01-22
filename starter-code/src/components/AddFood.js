import React, { Component } from 'react';

class AddFood extends Component {
  constructor(props){
      super(props);

      this.state = { 
        name: '',
        calories: '',
        image: '',
        quantity: 0 
      }
    
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit= this.handleSubmit.bind(this)
  }
  
  handleChange(event){ 
    let {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event){
    event.preventDefault() 
    
    this.props.addTheFood(this.state);   
    this.setState({
        name: '',
        calories: '',
        image: '',
        quantity: 0  
    });
  }

  render(){

    return (

      <div>
      <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/> 
    <br/>
    <br/>
          <label>Calories:</label>
          <input type="text" name="calories" value={this.state.calories} onChange={this.handleChange}/>
    <br/>
    <br/> 
         <label>Image:</label>
         <input type="text" name="image" value={this.state.image} onChange={this.handleChange}/> 
    <br/>
    <br/>     
          <input type="submit" value="Submit" />
      </form>
    </div>
    )
  }
}

export default AddFood;