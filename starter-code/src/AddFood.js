import React, { Component } from "react";

export default class AddFood extends Component {


  // handleInput = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }


  // handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.addTheFood(this.state);   
  //   this.setState({
  //     name: '',
  //     calories: '',
  //     image: '' 
  //   })  
  // }

  render() {
    return (
      <div>
        {/* <form className="foodFormList" onSubmit={(e)=>this.handleFormSubmit()}> */}
        <form className="foodFormList">
          <label>
            Name:
            {/* <input type="text" name="name" value='' onChange={this.handleInput} /> */}
            <input type="text" name="name" value={this.props.parentState.name} onChange={(e) => this.props.handleInput(e)} />
          </label>
          <label>
            Calories:
            {/* <input type="text" name="calories" value='' onChange={this.handleInput} /> */}
            <input type="text" name="calories" value={this.props.parentState.calories} onChange={(e) => this.props.handleInput(e)} />
          </label>
          <label>
            Image URL:
            {/* <input type="text" name="image" value='' onChange={this.handleInput} /> */}
            <input type="text" name="image" value={this.props.parentState.image} onChange={(e) => this.props.handleInput(e)} />
          </label>
          {/* <input type="submit" value="Submit" /> */}
          <button onClick={this.props.handleFormSubmit}>SUBMIT</button>
        </form>
      </div>
    );
  }
}
