import React, { Component } from 'react';

class AddFoodForm extends Component {

  state = {
    modalActive:false
  }

  toggleModal = () => {
    this.setState({modalActive: !this.state.modalActive}, function () {
      
    })
  }

  handleAdd = (event) => {
    var newFoodAttr = {}
    newFoodAttr.addFood = {}
    var keyName = event.target.name
    var inputFieldValue = event.target.value
    newFoodAttr[keyName] = inputFieldValue
    this.setState(newFoodAttr, function () {

    })
  }

  render() {

    if(this.state.modalActive) {
      var classNames = "modal is-active"
    } else {
      var classNames = "modal"
    }

    return (
      <div>
      <button onClick={this.toggleModal} className="button is-primary is-large modal-button" data-target="modal" >Add food</button>
      <div className={classNames}>
        <div class="modal-background"></div>
        <div class="modal-content">
          <input name="name" onChange={this.handleAdd} placeholder={this.state.name} />
          <input name="image" onChange={this.handleAdd} placeholder={this.state.image} />
          <input name="calories" onChange={this.handleAdd} placeholder={this.state.calories} />
        </div>
        <button onClick={this.toggleModal} class="modal-close is-large" aria-label="close">Add Food</button>
      </div>
      </div>
    )
  }
}

export default AddFoodForm