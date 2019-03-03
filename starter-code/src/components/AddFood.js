import React, { Component } from "react";

class AddFood extends Component{

  constructor(props){
    super(props)
    this.state = {
      name: "",
      calories: 0,
      image: "",
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.props.AddTheFood(this.state)
    this.setState({
      name: "",
      calories: "",
      image: ""
    })
  }


  handleChange = e => {
    const {name, value} = e.target;
    this.setState({
      [name] : value
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>

          <label htmlFor="name">Name:</label>
          <input type="text" value={this.state.value} name="name" onChange={e => this.handleChange(e)}/>

          <label htmlFor="calories">Calories</label>
          <input type="number" value={this.state.calories} name="calories" onChange={e => this.handleChange(e)}/>

          <label htmlFor="image">Image</label>
          <input type="text" value={this.state.image} name="image" onChange={e => this.handleChange(e)}/>

          <input type="submit" value="Add new dish"/>
        </form>
      </div>
    )
  }
}

export default AddFood;