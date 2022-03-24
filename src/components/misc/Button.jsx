import React, { Component } from 'react';
import NewForm from '../newForm/NewForm';

class Button extends Component {
  state = {
    newForm: false,
  };

  newForm = () => {
    return <NewForm />;
  };
  render() {
    return (
      <div>
        <button
          className="mt-3 ml-4 button is-primary"
          onClick={() => this.setState({ newForm: true })}
        >Add new food
        </button>

        <div>{this.state.newForm ? this.newForm() : null}</div>
      </div>
    );
  }
}

export default Button;
