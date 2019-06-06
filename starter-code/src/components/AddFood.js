import React, { Component } from "react"

class AddFood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      calories: '',
      image: '',
      quantity: '',
    }
  }

  handleChange = e => {
    let { name, value } = e.target
    this.setState({ [name]: value })

  }

  handleForm = e => {
    e.preventDefault()
    this.props.add(this.state)
    this.setState({
      name: '',
      calories: '',
      image: '',
      quantity: ''
    })
  }

  render() {

    return (


      <form onSubmit={this.handleForm}>
        <label>Name
          <input type='text' name='name' value={this.state.name} onChange={e => this.handleChange(e)}></input>
        </label>

        <label>Calories
          <input type='text' name='calories' value={this.state.calories} onChange={e => this.handleChange(e)}></input>
        </label>

        <label>Quantity
        <input type='text' name='quantity' value={this.state.quantity} onChange={e => this.handleChange(e)}></input>
        </label>

        <label>Image Url
        <input type='text' name='image' value={this.state.image} onChange={e => this.handleChange(e)}></input>
        </label>
        <button>Submit</button>
      </form>

    )
  }
}

export default AddFood