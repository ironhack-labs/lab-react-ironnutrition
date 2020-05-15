import React from 'react';
import 'bulma/css/bulma.css';

class Modal extends React.Component {
    state = {
        isFormActive: false,
        newFood: { quantity: 0 },
    }

    render() {
        return (
            <div>
                <button className="button" onClick={() => this.openCloseAddFoodModal()}>Add food</button>
                <div className={'modal ' + (this.state.isFormActive ? 'is-active' : '')}>
                    <div className="modal-background"></div>
                    <div className="modal-content form-add-food">
                        <div className="field">
                            <label className="label">Name</label>
                            <div className="control">
                                <input className="input" type="text" onChange={e => this.onChangeField(e, 'name')} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Number of calories</label>
                            <div className="control">
                                <input className="input" type="text" onChange={e => this.onChangeField(e, 'calories')} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Image</label>
                            <div className="control">
                                <input className="input" type="text" onChange={e => this.onChangeField(e, 'image')} />
                            </div>
                        </div>
                        <div className="control">
                            <button className="button is-primary" onClick={() => this.addFood()}>Add</button>
                        </div>
                    </div>
                    <button className="modal-close is-large" aria-label="close" onClick={() => this.openCloseAddFoodModal()}></button>
                </div>
            </div>
        );
    }

    openCloseAddFoodModal() {
        this.setState({ isFormActive: !this.state.isFormActive });
    }

    onChangeField(event, field) {
        this.setState({ newFood: { ...this.state.newFood, [field]: event.target.value } });
    }

    addFood() {
        this.props.addFoodMethod(this.state.newFood);
        this.openCloseAddFoodModal();
    }
}

export default Modal;