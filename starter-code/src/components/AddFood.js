import React, { Component } from 'react';


class AddFood extends Component {

  constructor(props){
      super(props);
      this.state = { 
        name: '',
        calories:'',
        image: ''
      }
      this.handleNameInput = this.handleNameInput.bind(this);
      this.handleCaloriesInput = this.handleCaloriesInput.bind(this);
      this.handleImageInput = this.handleImageInput.bind(this);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addTheFood(this.state);   
    this.setState({
      name: '',
      calories:'',
      image: '' 
    })  
  }

  handleNameInput = (event) => {
    this.setState({
      name: event.target.value
    }, () => console.log(this.state) )
  }

  handleCaloriesInput = (event) => {
    this.setState({
      calories: event.target.value
    }, () => console.log(this.state) )
  }

  handleImageInput = (event) => {
    this.setState({
      image: event.target.value
    }, () => console.log(this.state) )
  }

render() { 
    return (   
      <div>
      <form onSubmit={this.handleFormSubmit}>
        <label>Name</label><br/> 
        <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleNameInput(e)} /><br/> 
     
        <label>Calories</label><br/> 
        <input name="calories" type="text" value={this.state.calories} onChange={(e) => this.handleCaloriesInput(e)} /><br/> 

        <label>Image</label><br/> 
        <input name="image" type="text" value={this.state.image} onChange={(e) => this.handleImageInput(e)} /><br/> 
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
};

export default AddFood;