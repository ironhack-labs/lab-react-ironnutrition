import React from 'react'

class AddNewFood extends React.Component {

  state = {
    name: "",
    calories: "",
    image: "",
    quantity: "",
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.addNewFood(this.state)
    this.props.toggleAddNewFoodForm(false)
    this.setState({
      name: "",
      calories: "",
      image: "",
      quantity: ""
    })
  }

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      ...this.state,
      [name]: value
    })
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>

        <label>
          Name: <input type="text" value={this.state.name} name="name" onChange={e => this.handleChange(e)} />
        </label>

        <label>
          Calories: <input type="text" value={this.state.calories} name="calories" onChange={e => this.handleChange(e)} />
        </label>

        <label>
          Image: <input type="text" value={this.state.image} name="image" onChange={e => this.handleChange(e)} />
        </label>

        <label>
          Quantity: <input type="number" value={this.state.quantity} name="quantity" onChange={e => this.handleChange(e)} />
        </label>

        <input type="submit" value="Add New Food" />

      </form>
    )
  }
}

export default AddNewFood;
