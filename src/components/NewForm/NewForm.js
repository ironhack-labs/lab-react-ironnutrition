import React, { Component }  from 'react';

const initialState = {
  name: '',
  calories: '',
  image: ''
}


class NewForm extends Component {
  state = { ...initialState }

  onHandleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name] : value
    })
  }

  onSubmit = (event) => {
    const { name, calories, image } = this.state;

    event.preventDefault()

    if (name && image && calories && Number(calories) > 1) {
      this.props.onAddFood({
        name,
        image,
        calories: Number(calories)
      })
    } 
  }



  render() {
    const { name, calories, image } = this.state

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input name="name" value={name} onChange={this.onHandleChange} placeholder="Write your info"></input>
          </div>

          <div>
            <label htmlFor="calories">Calories:</label>
            <input name="calories" value={calories} onChange={this.onHandleChange} placeholder="Write your info"></input>
          </div>

          <div>
            <label htmlFor="image">Image:</label>
            <input name="image" value={image} onChange={this.onHandleChange} placeholder="Write your info"></input>
          </div>

          <button>Add Food</button>
        </form>
      </div>
    )
  }
}

export default NewForm