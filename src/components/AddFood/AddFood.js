import React, { Component } from 'react';

import { Button, Modal } from 'react-bootstrap';

class AddFood extends Component {
  state = {
    showModal: false,

    form: {
      name: '',
      calories: '',
      image: '',
    }
  }

  handleClose = () => this.setState({ showModal: false });

  handleShow = () => this.setState({ showModal: true });

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      form: { ...this.state.form, [name]: value },
    })
  }

  handleCreateFood = (event) => {
    this.props.addFood(this.state.form);

    this.setState({
        form: {
            name: '',
            calories: '',
            image: '',
        }
    })

    this.handleClose();
  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Add new Food
        </Button>

        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Criar nova Comida</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div>
                <input type="text" name="name" placeholder="Name of food" value={this.state.form.name} onChange={this.handleChange} />
              </div>

              <div>
                <input type="number" name="calories" placeholder="Number of calories" value={this.state.form.calories} onChange={this.handleChange} />
              </div>

              <div>
                <input type="text" name="image" placeholder="Image" value={this.state.form.image} onChange={this.handleChange} />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleCreateFood}>
              Create Food
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddFood;
