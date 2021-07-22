import React from 'react';
import 'bulma/css/bulma.css';
import './AddNewFood.css';


class AddNewFood extends React.Component {
  state = {
    name: '',
    calories: 0,
    image: '',
    quantity: 0  
  }

  handleChange = (event) => {
    const target = event.target; 
    const name = target.name;

    this.setState ({ 
      [name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addSubmit(this.state);
    this.props.submitBtn();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-container">
          <div>
            <label>Name:</label>
            <input className="input is-small" type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
          </div>
        
          <div>
            <label>Calories:</label>
            <input className="input is-small" type="number" name="calories" value={this.state.calories} onChange={this.handleChange}/>
          </div>
        
          <div>
            <label>Image:</label>
            <input className="input is-small" type="text" name="image" value={this.state.value} onChange={this.handleChange}/>
          </div>
        
          <div>
            <label>Quantity:</label>
            <input className="input is-small" type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange}/>
          </div>
        
        </div>
        
        <button id="form-btn" className="button is-primary" type="submit">Submit</button>

      </form>
    )
  }
}

export default AddNewFood;