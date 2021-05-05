import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    fields: {
        name: "",
        calories: "",
        image: ""
    },
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.addFood(this.state.fields)
      
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value
      }
    });
  }

  render() {
    const { fields } = this.state;
    return (
      <div>
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div className="field">
          <label className="label">Name:</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" name="name" value={fields.name} onChange={(e) => this.handleChange(e)}/>
          </div>
          <p className="help">This is a help text</p>
        </div>

        <div className="field">
          <label className="label">Calories:</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" name="calories" value={fields.calories} onChange={(e) => this.handleChange(e)}/>
          </div>
          <p className="help">This is a help text</p>
        </div>

        <div className="field">
          <label className="label">Image:</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" name="image" value={fields.image} onChange={(e) => this.handleChange(e)}/>
          </div>
          <p className="help">This is a help text</p>
        </div>

        <button className="button is-info" type="submit">Add food</button>
      </form>
      </div>
    );
  }
}
