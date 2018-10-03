import React, { Component } from "react";
import foods from "../foods.json";

export class Form extends Component {

  constructor() {
    super();
    this.state = {
      formDisplayed: true,
      name:"",
      calories:"",
      image:""
    }

  }

  toggleForm = () => {
    this.setState({ formDisplayed: !this.state.formDisplayed });
  }

  addFood = () => {

    const name = this.state.name;
    const calories = this.state.calories;
    const image = this.state.image;
    const NewFood = {name, calories, image};
    //foods.push(newFood);

  }

  render() {
    const {name, calories, image} = this.state

    const margin = { margin: "20px" }
    const padding = {padding: "10px 15px"}
    if (this.state.formDisplayed) {
      return (
        <div>
          <button style={padding} onClick={this.toggleForm}>Add</button>
          <label style={margin}>Name</label>
          <input style={margin} type="text" value={name} onChange={(e)=>this.setState({name:e.target.value})} />
          <label style={margin}>Calories</label>
          <input style={margin} type="text" value={calories} onChange={(e)=>this.setState({calories:e.target.value})} />
          <label style={margin}>ImageURL</label>
          <input style={margin} type="text" value={image} onChange={(e)=>this.setState({image:e.target.value})}/>
          <button style={padding} onClick="this.toggleForm()  ; this.addFood()" >Submit</button>
        </div>

      )
    } else {
      return (
        <button style={padding} onClick={this.toggleForm}>Add</button>
      )
    }

  }
}