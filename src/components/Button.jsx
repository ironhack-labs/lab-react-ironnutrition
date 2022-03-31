import 'bulma/css/bulma.css';
import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="buttons">
        <button onClick={this.props.showTheForm} className="button is-info">
          Add New Food
        </button>
      </div>
    );
  }
}

export default Button;
