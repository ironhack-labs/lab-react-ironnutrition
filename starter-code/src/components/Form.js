import React, { Component, Fragment } from 'react'

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      calories: '',
      image: '',
      quantity: 0,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value} = event.target;
    this.setState({
      [name]: value,
    })
  }

  handleSubmit(event) {
    console.log(event.target.name, '<---- event no form')
    event.preventDefault();

    this.props.addFood(this.state);

    this.setState({
      name: '',
      calories: '',
      image: '',
      quantity: 0,
    })
  }
  
  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Food Name</label>
                <div className="control">
                  <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="input" />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">Food Calories</label>
                <div className="control">
                  <input type="text" name="calories" value={this.state.calories} onChange={this.handleChange} className="input" />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">Food Image</label>
                <div className="control">
                  <input type="text" name="image" value={this.state.image} onChange={this.handleChange} className="input" />
                </div>
              </div>
            </div>
          </div>
          <button className="button is-dark" type="submit">Submit</button>
        </form>
        <hr/>
      </Fragment>
    )
  }
}

export default Form;