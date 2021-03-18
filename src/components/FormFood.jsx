import React, { Component } from 'react'

export class FormFood extends Component {

    
        state = {
            name: "",
            numberOfCalories: 0
          };

          handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
        
            this.setState({ [name]: value });
          };
        
          handleSubmit = (event) => {
            event.preventDefault();
            // console.log(this.state);
            console.log(typeof this.props.myProp);
            // console.log(this.props.myProp("Hey my dude"));
            this.props.addFood({
              name: this.state.name,
              calories: this.state.calories,
              
            });
            
          };
    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            // onChange={this.handleBrandChange}
            onChange={this.handleChange}
            value={this.state.name}
            id="name"
            type="text"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="calories">Calories</label>
          <input
            type="number"
            name="calories"
            value={this.state.calories}
            // onChange={this.handleNameChange}
            onChange={this.handleChange}
          />
        </div>
       
        <button>Submit</button>
      </form>
        )
    }
}

export default FormFood
