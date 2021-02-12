import React, {Component} from "react";

class AddFood extends Component{
  constructor(props) {
    super(props);
    this.state = {
        formView: false,
        name: '',
        calories: 0,
        image: ''
    }
}

showForm = () => {
  const newForm = !this.state.formView;
  this.setState({formView: newForm})
}
handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  });
  console.log(this.state)
};

handleSubmit = (event) => {
  event.preventDefault()

  const newfood = {...this.state}
  this.props.added(newfood)
  console.log(this.props)

  this.setState(
    {
    formView: false,
    name: '',
    calories: 0,
    image: ''
  }
  )
}

render = () => {
  const {name, calories, image} = this.state 
  const renderForm = {
    display: this.state.formView ? "block" : "none"
  }
  return(
    <div>
      <button onClick={this.showForm}>Add new food</button>
      <form onSubmit={this.handleSubmit} style={renderForm}>
        <label>Name:</label>
          <input type="text" name="name" value={name} onChange={this.handleChange}/>
        <label>Calories:</label>
          <input type="number" name="calories" value={calories} onChange={this.handleChange}/>
        <label>Image:</label>
          <input type="text" name="image" value={image} onChange={this.handleChange}/>
        <button>Submit</button>
      </form>
    </div>
  )
}
}
export default AddFood