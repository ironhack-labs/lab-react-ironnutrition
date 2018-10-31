import React, { Component } from 'react'
import Form from './Form'

class AddFoodButton extends Component {

  state = {
    isVisible: false,
  }

  handleClick = () => {
    const {isVisible} = this.state;
    this.setState({
      isVisible: !isVisible,
    })
  }

  render() {
    const {isVisible} = this.state;
    const {handleAddNew} = this.props;
    return (
      <div className="add-food-btn">
        <button className="button is-info" onClick={this.handleClick}>Add New Food</button>
        { isVisible ? <Form handleAddNew={handleAddNew} handleClick={this.handleClick}/> : null}
      </div>
    )
  }
}

export default AddFoodButton;
