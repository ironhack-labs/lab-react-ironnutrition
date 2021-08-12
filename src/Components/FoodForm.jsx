import React, { Component } from 'react'

class FormFood extends Component {
    state = {
      image: "",
      name: "",
      calories: 0,
    };
  
    handleImage = (event) => {
      const value = event.target.value; 
      this.setState({
        image: value,
      });
    };
  
    handleName = (event) => {
      const value = event.target.value;
      this.setState({
        name: value,
      });
    };
  
    handleCalories = (event) => {
      const value = event.target.value;
      this.setState({
        calories: value,
      });
    };
  
    handleSubmit = (event) => {
      event.preventDefault(); 
      console.log(this.state);
    };
  
    handleChange = (event) => {
      const name = event.target.name;
      let value = event.target.value;
      this.setState({
        [name]: value,
      });
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} className="food-form">
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
          <div>
            <label htmlFor="image">Image</label>
            <input
              type="text"
              id="image"
              name="image"
              onChange={this.handleChange}
              value={this.state.image}
            />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={this.handleChange}
             
              value={this.state.name}
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div>
            <label htmlFor="calories">Calories</label>
            <input
              value={this.state.calories}
              
              onChange={this.handleChange}
              type="number"
              name="calories"
              id="calories"
            />
          </div>
          <button>Submit !</button>
        </form>
      );
    }
  }
  
  export default FormFood;