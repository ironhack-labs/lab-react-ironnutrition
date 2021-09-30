import React from 'react';
import './AddFood.css';
import 'bulma/css/bulma.css';

class AddFood extends React.Component {
  state = {
    name: '',
    calories: '',
    image: '',
  };

  buttonHandler = () => {
    console.log('state', this.state);
  };

  changeNameHandler = (event) => {
      this.setState({
          name: event.target.value
      })
  }

  changeCaloriesHandler = (event) => {
      this.setState({
          calories: event.target.value
      })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    
    // Call the parent passed function
    this.props.addNewFood({ name: this.state.name, calories: this.state.calories });
    
    // Reset
    this.setState({
        name: '',
        calories: '',
        image: '',
    })  
  }

  render() {
    return (
      // form will be added here!
      <div>
        {/* <form onSubmit={this.handleFormSubmit}> */}
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={(e) => this.changeNameHandler(e)}></input>

          <label>calories:</label>
          <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.changeCaloriesHandler(e)}></input>

          {/* <label>image:</label>
          <input type="text" name="image" value={this.state.image}></input> */}

          <button onClick={this.handleFormSubmit}>Submit</button>
        {/* </form> */}
      </div>
    );
  }
}

export default AddFood;
