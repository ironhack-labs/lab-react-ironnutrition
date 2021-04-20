import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  HandleDecrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.HandleDecrement}> - </button>
        <span> {this.state.count} </span>
        <button onClick={this.handleIncrement}> + </button>
      </div>
    );
  }
}

export default Counter;
