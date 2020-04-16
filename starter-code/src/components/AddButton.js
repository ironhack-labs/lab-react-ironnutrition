import React, { Component } from 'react';
import FormAddFood from './FormAddFood';
import Foods from '../foods.json';
import 'bulma/css/bulma.css';


class AddButton extends Component {
  state = {
    isVisible: false,
    listFood: Foods,
  };

  handleVisibility = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  render() {
    const { isVisible } = this.state;
    return (
      <div className="form-add-food-container">
        {isVisible && (
          <div>
            <FormAddFood addTheFood={ this.props.addFood } />
          </div>
        )}
        <button className="button-form-food" class="button is-success" onClick={this.handleVisibility}>Form of Food</button>
      </div>
    );
  }
}

export default AddButton;