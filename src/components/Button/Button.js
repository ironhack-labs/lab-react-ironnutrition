import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  handleClick = () => {
    this.setState((prevState) => {
      return { show: !prevState.show };
    });
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          click to add Food
        </button>
        {this.state.show && <div>input</div>}
      </div>
    );
  }
}

export default Button;
