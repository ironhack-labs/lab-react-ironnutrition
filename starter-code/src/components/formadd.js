import React, { Component } from "react";

class FormAdd extends Component {

    state = {
        name: '',
        calories: '',
        image: ''
      }

    handleFoodInput = (event) => {
        this.setState({
          name: event.target.value
        })
      }
      
      handleCaloriesInput = (event) => {
        this.setState({
          calories: event.target.value
        })
      }
      
      handleImageInput = (event) => {
        this.setState({
          image: event.target.value
        })
      }
      
      
      
      handleFormSubmit = (event) => {
          this.props.methodAdd(this.state)// to call a method from parent
          event.preventDefault();   
        }
      


  render() {

    if(!this.props.show) {
        return null;
      }

    return (
        <div>
         <br/>
         <br/>
       
        <form onSubmit = {this.handleFormSubmit}>
          <label>
            Food:
            <input type="text" name="food" value={this.state.name} onChange={(e) => this.handleFoodInput(e)}/>
          </label>
          <label>
            Calories:
            <input type="number" name="calories" value={this.state.calories} onChange={(e) => this.handleCaloriesInput(e)}></input>
          </label>
          <label>
            Image URL:
            <input type="text" name="imageurl" value={this.state.image} onChange={(e) => this.handleImageInput(e)}></input>
          </label>
          <input type="submit" value="Submit"/>
        </form>
        <br/>
        <br/>
        
      </div>
      
    );
  }
}


export default FormAdd