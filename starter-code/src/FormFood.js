import React, { Component } from 'react';
import ButtonFood from './components/ButtonFood';

class FormFood extends Component{

  state = {
    name: "",
    calories: 0,
    image: "",
    quantity:0
  }

  handleNameState = (e) => {
    this.setState({
      ...this.state,
      name: e.target.value
    })
  }
  handleCaloriesState = (e) => {
    this.setState({
      ...this.state,
      calories: e.target.value
    })
  }
  handleImageState = (e) => {
    this.setState({
      ...this.state,
      image: e.target.value
    })
  }
  
  handleFormSubmit = (e) => {
   e.preventDefault();
    this.props.toAction (this.state)
   }

   render(){

    return (
     <div className={this.props.className}>
       <form onSubmit={this.handleFormSubmit}>
           <label>Name:</label>
           <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleNameState}/>
 
           <label>Number of calories:</label>
           <input type="number" name="calories" value={this.state.calories} onChange={this.handleCaloriesState}/>
 
           <label>Image:</label>
           <input type="text" name="image" value={this.state.image} onChange={this.handleImageState} />
 
           <input type="submit" value="Add Food"/>
       </form>
     </div>
   )
   }
 
  }
  

export default FormFood