import React, {Component} from "react"

class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      calories: 0,
      image: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    let { name, calories, image } = event.target;
    this.setState({[name]: event.target.value});
  }

  handleFormSubmit (event) {
    event.preventDefault();
    this.props.addFoodMethod(this.state);   
    this.setState({
      name: '',
      calories: 0,
      image: '',
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>

            <label>Name:</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            <label>Calories:</label>
            <input type="number" name="calories" value={this.state.calories} onChange={this.handleChange} />
            <label>Image URL:</label>
            <input type="text" name="image" value={this.state.image} onChange={this.handleChange} />
            
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddFood;