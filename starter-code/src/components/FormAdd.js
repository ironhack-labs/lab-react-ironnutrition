import React, { Component } from 'react';

class FormAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      calories: '',
      image: '',
      quantity: 0,    
    }
  }

  changeHandler(event) {
    let { name, value } = event.target;
    console.log(value)
    this.setState({
      [name]: value
    })
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.addFoodHandler(this.state);
    this.setState({
      name: '',
      calories: 0,
      image: '',
      quantity: 0,
    })
  }

  render() {
    return(
      <form onSubmit={(event) => this.submitHandler(event)}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input input-width" name="name" type="text" placeholder="Food's name" onChange={(event) => this.changeHandler(event)} value={this.state.name}/>
          </div>
        </div>
        <div className="field">
          <label className="label">Calories</label>
          <div className="control">
            <input className="input" name="calories" type="text" placeholder="Food's calories" onChange={(event) => this.changeHandler(event)} value={this.state.calories}/>
          </div>
        </div>
        <div className="field">
          <label className="label">Image Url</label>
          <div className="control">
            <input className="input" name="image" type="text" placeholder="Food's image URL" onChange={(event) => this.changeHandler(event)} value={this.state.image}/>
          </div>
        </div>
        <input type="hidden" name="quantity" value={this.state.quantity}/>
        <button className="button" type="submit">Submit</button>
      </form>
    )
  }

}

export default FormAdd;