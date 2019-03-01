import React, {Component} from 'react';

class Form extends Component {

  state = {
    name: '',
    calories: 0,
    image: ''
  };

  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value })
  }

  handleSubmit = (e) => {
    // como el formulario, tiene el evento por defecto que es hacer un post, tenemos que meter un 
    e.preventDefault();
    this.props.onSubmitForm({name: this.state.name, calories: this.state.calories, image: this.state.image})
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Food Name" 
          value={this.state.name} onChange={this.handleChange} onBlur={this.handleBlur} name="name"/>
        </div>
      </div>
      <div className="field">
        <label className="label">Calories</label>
        <div className="control">
          <input className="input" type="text" placeholder="Calories" 
          value={this.state.calories} onChange={this.handleChange} onBlur={this.handleBlur} name="calories"/>
        </div>
      </div>
      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input className="input" type="text" placeholder="Image Src" 
          value={this.state.image} onChange={this.handleChange} onBlur={this.handleBlur} name="image"/>
        </div>
      </div>
      <input className="button" type="submit" value="Submit" />
    </form>  
    );
  }
}

export default Form;