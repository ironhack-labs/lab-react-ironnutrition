import React, {Component} from 'react';
import './FormDown.css';

const initialState = {
  name: '',
  image: '',
  calories: ''
}

class FormDown extends Component {
    state = {
      ...initialState
    }


  onSubmit = (event) => {
    const { name, image, calories } = this.state
    event.preventDefault()

    if (name && image && calories && Number(calories) > 1) {
      this.props.addNewFood({
        name,
        image,
        calories: Number(calories)
      })
        this.resetForm()
    }
  }

  resetForm = () => {
    this.setState({ ...initialState })
  } 

  onHandleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  render(){
    const { name, image, calories} = this.state
    return (
      <div 
      className="dropdown" > 
          <div id="myDropdown">
          <form onSubmit={this.onSubmit}>
          <div className="field">
          <label 
            htmlFor='name'
            className="label"
            >Name</label>
          <div className="control">
            <input className="input" 
              type="text" placeholder="name of food"
              value={name}
              name="name"
              onChange={this.onHandleChange}
              id="name"
              />
          </div>
          </div>

          <div className="field">
          <label
            htmlFor='image' 
            className="label">Image</label>
          <div className="control">
            <input className="input" 
              type="file" 
              placeholder="select a file"
              value={image}
              onChange={this.onHandleChange}
              name="image"
              id="image"
              />
          </div>
          </div>

          <div className="field">
          <label
            htmlFor='calories' 
            className="label">Calories</label>
          <div className="control">
            <input className="input" 
              type="number" 
              placeholder="0 cal"
              value={calories}
              onChange={this.onHandleChange}
              min={1}
              name="calories"  
              id="calories"
              />
          </div>
          </div>

          <div>
          <button className="button is-info">Submit</button>
          </div>
          </form>
          </div>
      </div>
    )
  }
}

export default FormDown;
