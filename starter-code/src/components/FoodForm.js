import React, { Component } from "react";

class FoodForm extends Component{

  constructor(props){
    super(props)
    this.state ={
      name: "",
      calories: "",
      image: "",
    };
  }

  genericSynchronize(event){
    const { type, name, value, checked } = event.target;
      this.setState({ [name]: value })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.addNewFood(this.state)
    this.setState({
      name: "",
      calories: "",
      image: "",
    })
  }

  render(){
    return(
      <section className="FoodForm">
        <h3>Add New Food</h3>
        
        <form onSubmit = {event => this.handleSubmit(event)}>

          <label>
            Name :
              <input value={this.state.name}
                onChange={event => this.genericSynchronize(event)}
                type="text" name="name" placeholder="pasta"/>
          </label>

          <label>
            Calories : <input value={this.state.calories}
              onChange={event => this.genericSynchronize(event)}
              type="number" name="calories" placeholder="450"/>
          </label>

          <label>
            Image : <input value={this.state.image} 
              onChange={event => this.genericSynchronize(event)}
              type="text" name="image" placeholder=""/>
          </label>

          <button>Save this food</button>

        </form>
      </section>
    )
  }

}

export default FoodForm;