import React from 'react';

import SubmitForm from './SubmitForm'

class AddFood extends React.Component {


    state = {
        showForm: false,
        newFood: '',
        newCal: '',
        newImg: '',
    }

    showForm = () => {
        this.setState({
            showForm: !this.state.showForm
        });

    }

    disabled = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            // disabledButton: event.target.name === '' ? true : false
        })
    }


    render() {
        return (
            < div >
                <div className="columns">
                    <div className="column has-text-left">
                        <button className="button is-link" onClick={this.showForm}>{this.state.showForm ? '-' : '+'}</button>
                        <span className="add-food">Add Food</span>
                    </div>
                </div>
                {
                    this.state.showForm &&
                    <form onSubmit={this.props.onSubmit} onChange={this.disabled}>
                        <div className="columns">
                            <div className="column">
                                <div className="control">
                                    <input className="input" type="text" name="newFood" placeholder="Enter Food" onChange={this.props.onChange} />
                                </div>
                            </div>
                            <div className="column">
                                <div className="control">
                                    <input className="input" type="text" name="newCal" placeholder="Calories" onChange={this.props.onChange} />
                                </div>
                            </div>
                            <div className="column">
                                <div className="control">
                                    <input className="input" type="text" name="newImg" placeholder="Image URL" onChange={this.props.onChange} />
                                </div>
                            </div>


                            <div className="column has-text-right ">
                                {this.state.newFood && this.state.newCal && this.state.newImg ? <SubmitForm disabled="false" /> : <SubmitForm disabled="true" />
                                }

                            </div>


                        </div>
                    </form>
                }
                <div className="columns">
                    <div className="column"></div>
                </div>
            </div >
        );
    }
}

export default AddFood;
