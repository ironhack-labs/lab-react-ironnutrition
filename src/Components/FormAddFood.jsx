import React, { Component } from 'react'

class FormAddFood extends Component {
  state = {
    viewForm: false,
    name: "",
    calories: 0,
    image: ""
  }

  handleToggleForm = () => {
    this.setState({viewForm: !this.state.viewForm});
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  }

  handleSubmitForm = (event) => {
    event.preventDefault();
    this.props.addFood({
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image
    });

    this.setState({
      name: "",
      calories: "",
      image: "",
      viewForm: !this.state.viewForm
    });

  }

  render() {
    return (
      <div>
        <button onClick={this.handleToggleForm}>Add new food</button>
        {this.state.viewForm && 
          <form onSubmit={this.handleSubmitForm}>
            <h2>Add new food</h2>
            <div>
              <label htmlFor="name">Name</label>
              <input onChange={this.handleChange} type="text" id="name" name="name" />
            </div>
            <div>
              <label htmlFor="calories">Number of calories</label>
              <input onChange={this.handleChange} type="number" id="calories" name="calories" />
            </div>
            <div>
              <label htmlFor="image">Image url</label>
              <input onChange={this.handleChange} type="text" name="image" id="image" /> 
            </div>
            <button>Add</button>
          </form>
        }
      </div>
    )
  }
}

export default FormAddFood;
