import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class AddForm extends Component {
  render() {
    const { onSubmit } = this.props;
    return (
      <div>
        <form onSubmit={onSubmit}>
          <textarea
            name="name"
            label="Name"
            className="textarea"
            placeholder="Enter a name"
          ></textarea>
          <textarea
            name="calories"
            label="Calories"
            className="textarea"
            placeholder="Enter the calories"
          ></textarea>
          <button className="button is-primary is-rounded" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddForm;
