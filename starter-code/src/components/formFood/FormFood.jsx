import React, { Component } from 'react';

class FormFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      calories: 0,
      image: '',
    }
    this.inputChange = this.inputChange.bind(this);
    this.addForm = this.addForm.bind(this)
  }

  inputChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value })
  }

  addForm(event) {
    event.preventDefault();
    this.props.fn(this.state);   
    this.setState({
      name: '',
      calories: 0,
      image: '',
    })
  }

  render() {
    return(
      <div className = "add-food">
      <form className="field" onSubmit={this.addForm}>
          <label className="label">Name:</label>
          <div className="control">
            <input className="input" type="text" name="name" value={this.state.name} onChange={(e) => this.inputChange(e) } />
          </div>
          <label className="label">Calories:</label>
          <input className="input" type="number" name="calories" value={this.state.calories} onChange={(e) => this.inputChange(e) } />

          <label className="label">Image (URL):</label>
          <input className="input" type="text" name="image" value={this.state.image} onChange={(e) => this.inputChange(e) } />
          
          <button className="button is-dark is-large" type="submit" value="Submit">Add</button>
      </form>
    </div>
    )
  }
}

export default FormFood;
