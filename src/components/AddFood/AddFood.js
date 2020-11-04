import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './AddFood.css';

class AddFood extends Component {
    state = {
        modalState: false,
        form: {
            name: '',
            calories: 0,
            image: '',
        }
    }

    showModal = () => {
        this.setState({modalState: !this.state.modalState})
    }

    handleFormChange = event => {
        const { name, value } = event.target;
        this.setState({form: { ...this.state.form, [name]: value }});
    }

    createFood = event => {
        this.props.create(this.state.form);
        this.setState({form: {
            name: '',
            calories: 0,
            image: '',
        }});
        this.showModal();
    }

    render() {
        if (this.state.modalState) {
            return (
                <div>
                    <div className="modal is-active">
                        <div className="modal-background" onClick={this.showModal} ></div>
                        <div className="modal-content custom-content">
                            <form>
                                <label name='name' className='label'>Food Name</label>
                                <input type='text' className='input' name='name' value={this.state.form.name} onChange={this.handleFormChange} />

                                <label name='calories' className='label'>Total Calories</label>
                                <input className='input' name='calories' type='number' value={this.state.form.calories} onChange={this.handleFormChange} />

                                <label name='image' className='label'>Image URL</label>
                                <input className='input' name='image' type='text' value={this.state.form.image} onChange={this.handleFormChange} />
                            <button className='button is-info' type='button' onClick={this.createFood} >Add New Food</button>
                            </form>
                        </div>
                        <button className="modal-close is-large" aria-label="close" onClick={this.showModal} ></button>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <button className='button is-info' onClick={this.showModal} >Add Food</button>
                </div>
            )
        }
    }
}

export default AddFood;