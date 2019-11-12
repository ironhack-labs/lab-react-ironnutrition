import React, { Component } from 'react';

class AddFood extends Component {

  constructor(props){
      super(props);
      console.log(props);
      this.state = { 
        name: '',
        calories: '',
        image: '',
      }
      this.handleChange=this.handleChange.bind(this);
      this.handleFormSubmit=this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.AddFood(this.state);
    this.setState({
      name: '',
      calories: '',
      image: '',
    });
  }
  
  render(){
    return (
      <div>
        <form className="add-food-form" onSubmit={this.handleFormSubmit}>
          <div className="field">
              <label className="label">Name:</label>
            <div className="control">
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
             </div>
          </div> 
          <div className="field">
              <label className="label">Calories:</label>
            <div className="control">
              <input type="text" name="calories" value={this.state.calories} onChange={this.handleChange}/>
            </div>
          </div> 
          <div className="field">
              <label className="label">Image:</label>
            <div className="control">
              <input type="text" name="image" checked={this.state.image} onChange={this.handleChange}/>
            </div>
          </div> 
              <input className="button is-primary add-form-button" type="submit" value="Submit" />
        </form>
    </div>
    )
  }
}

export default AddFood;