import React from 'react';
import InputForm from '../InputForm/InputForm';

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
        {this.state.show && <InputForm setFoodsState = {this.props.setFoodsState}/>}
      </div>
    );
  }
}

export default Button;
