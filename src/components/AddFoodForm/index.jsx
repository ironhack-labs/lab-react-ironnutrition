import React, { Component } from 'react';
import './index.css'

const INITIAL_VALUES = {
  name: '',
  image: '',
  calories: '',
  servings: 0
}

class AddFoodForm extends Component {
  state = {
    values: {...INITIAL_VALUES}
  }

  onSubmit = (ev) => {
    ev.preventDefault()
    this.props.onSubmitFood(this.state.values)
    this.setState({values: {...INITIAL_VALUES}})
  }

  onChange = (ev) => {
    const { name, value } = ev.target
    this.setState(prevState => ({
      values: {
        ...prevState.values,
        [name]: value
      }
    }))
  }

  render() {
    const { values } = this.state

    return (
      <div className='AddFoodForm'>
        <h2>Add Food Entry</h2>
        <form onSubmit={this.onSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={values.name} onChange={this.onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image</label>
            <input type="url" className="form-control" id="image" name="image" value={values.image} onChange={this.onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="calories" className="form-label">Calories</label>
            <input type="text" className="form-control" id="calories" name="calories" value={values.calories} onChange={this.onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="servings" className="form-label">Servings</label>
            <input type="number" className="form-control" id="servings" name="servings" value={values.servings} onChange={this.onChange}/>
          </div>
          <button type="submit" className="btn btn-primary">Create</button>
        </form>
      </div>
    );
  }
}

export default AddFoodForm;