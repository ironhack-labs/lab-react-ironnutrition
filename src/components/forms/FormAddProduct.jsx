import React from 'react';

export default class FormAddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 1};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Add: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input type="number" className="input" value={this.state.value} onChange={this.handleChange} />
          </div>
          <div className="control">
            <button className="button is-info" type="submit" value="Submit">+</button>
          </div>
        </div>
      </form>
    );
  }
}
