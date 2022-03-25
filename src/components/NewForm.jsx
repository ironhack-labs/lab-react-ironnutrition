import React, { Component } from 'react';

const initialState = {
  name: '',
  image: '',
  calories: '',
  error: false
}


class Newform extends Component {

  state = { ...initialState }

  onHandleChange = (event) => {
    const { name, value } = event.target
  
    this.setState({
      [name]: value
    })
  }

  onFocus = () => {
    const { error } = this.state

    if (error) {
      this.setState({ error: false })
    }
  }

  onSubmit = (event) => {
    const { name, image, calories } = this.state
    event.preventDefault()

    if (name && image && calories && Number(calories) > 0) {
      this.props.addDish({
        name,
        image,
        calories: Number(calories)
      })
      this.resetForm()
      
    } else {
      this.setState({ error: true })
    }
  }

  resetForm = () => {
    this.setState({ ...initialState })
  }

  render() {
    const { name, image, calories, error } = this.state
    return (
      <div>
      <form className="NewForm" onSubmit={this.onSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            onFocus={this.onFocus}
            value={name} onChange={this.onHandleChange} name="name"
            className="form-control" id="name" placeholder="add new food"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image</label>
          <input
            onFocus={this.onFocus}
            value={image} onChange={this.onHandleChange} name="image"
            className="form-control" id="image" placeholder="./http...."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="calories" className="form-label">Calories</label>
          <input
            onFocus={this.onFocus}
            value={calories} onChange={this.onHandleChange} name="calories"
            min={1}
            type="number" className="form-control" id="calories" placeholder="Number of calories"
          />
        </div>


        {error && (
          <p className="text-danger">Invalid form</p>
        )}

        <button className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
    );
  }
}

export default Newform;
