
import React, { Component } from 'react';

class Form extends Component {
  

  state = {
    name : '',
    calories: '',
    image: '',
    quantity: 1,
  }

  handleChange = (e) => {
  
    if (e.target.id  == 'name') {
      this.setState({name : e.target.value});
    }
    else if (e.target.id == 'calories') {
      this.setState({calories : e.target.value});
    }
    else if (e.target.id == 'image') { 
      this.setState({image : e.target.value});
    }
  }

  handleSubmit = (e) =>{
    
    this.props.addFood(this.state)
    
  }


  render() {
  
  
    
  if (this.props.form.showForm === true){
  

    return (<div>
    <p>name:</p> <input id = "name" type="text" value={this.state.name} onChange={this.handleChange}/>
    <p>calories:</p> <input id = "calories" type="text"  value={this.state.calories} onChange={this.handleChange}/>
    <p>image:</p> <input id = "image" type="text"  value={this.state.image} onChange={this.handleChange}/>
    <br/><br/>
        <button className="button is-info" onClick = {() => {this.handleSubmit()}} > ADD </button>
        <button className="button is-info" > HIDE </button>
    <br/>
      </div>
    );}
    else {
      return (
        <div></div>
      )
    }
  }
}

export default Form;