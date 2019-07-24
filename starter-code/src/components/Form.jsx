import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state={
      name: '',
      calories: '',
      image:''
    }
  }

  handleInput(event){
    let {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  formHandler(event) {
    console.log(this.props)
    event.preventDefault()
    this.props.AddHandler(this.state);
    this.props.ShowForm();
    this.setState({
      name: '',
      calories: '',
      image:''
    })
  }

  render() {

    return (
      <div>
        <form onSubmit={e =>this.formHandler(e)}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleInput(e)}/>

          <label>Calories:</label>
          <input type="text" name="calories"  value={this.state.calories} onChange={(e) => this.handleInput(e)} />

          <label>Image:</label>
          <input type="text" name="image"  value={this.state.image} onChange={(e) => this.handleInput(e)}/>

          <input type="submit" value="Submit" />
        </form>

      </div>
    )
  }

}

export default Form