import React from 'react';
import { Button, Modal, FormText } from 'react-bootstrap'; 

class CreateNewUserForm extends React.Component {

    state = {
        showModal: false,
        form: {
            name: '',
            NumberOfCalories: '',
            Image: '',
        }
    }

    handleClose = () => this.setState({ showModal: false });

    handleShow = () => this.setState({ showModal: true });

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            form: { ...this.state.form, [name]: value }
        });

    };

    createFood = () => {

        this.props.addFood(this.state.form);

        this.handleClose();

    };
  
    render() {
    return (
        <div>
            <Button variant="primary" onClick={this.handleShow}>
                Add New Food
            </Button>

            <Modal show={this.state.showModal} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Create New Food</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form>
                <div>
                <input type="text" name="name" placeholder="Name for the new food" value={this.state.form.FoodName} onChange={this.handleChange}/>
                </div>
                <div>
                <input type="number" name="NumberOfCalories" placeholder="Number of calories" value={this.state.form.NumberOfCalories} onChange={this.handleChange}/>
                </div>
                <div>
                <input type="text" name="Image" placeholder="Image for the new food" value={this.state.form.Image} onChange={this.handleChange}/>
                </div>
                </form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.createFood}>
                    Create Food
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default CreateNewUserForm;