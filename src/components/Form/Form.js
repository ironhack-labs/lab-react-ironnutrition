import React, { Component } from 'react';


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: '',
        calories: '',
        image: '',
      },
    };
  }
  componentDidMount() {
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addFood(this.state.fields);
    this.setState({
      fields: {
        name: '',
        calories: '',
        image: '',
      },
    });
    this.clearForm()
  }

  clearForm() {
    {
      this.setState({
        name:"",
        calories:"",
        image:"",
      })
    }
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value,
      },
    });
  }

  render() {
    const { name, calories, image } = this.state;
    return (
      <form
        id="newfood-form"
        className="mb-4"
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              value={name}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Calories</label>
          <div className="control">
            <input
              className="input"
              type="number"
              name="calories"
              value={calories}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Image url</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="image"
              value={image}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
        </div>
        <button className="button is-success" type="submit">
          Create
        </button>
      </form>
    );
  }
}