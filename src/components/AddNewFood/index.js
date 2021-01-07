import React, { Component } from 'react';
import './AddNewFood.css'

export default class AddNewFood extends Component {
        state = {
                name: '',
                calories: 100,
                image: '',

        }

        handleChange = (event) => {
                const { name, value } = event.target;
                this.setState({ [name]: value })
        }

        handleSubmit = (event) => {
                event.preventDefault();
                this.props.handleAddNewFood(this.state);
                this.setState({
                        name: '',
                        calories: 100,
                        image: '',
                })
        }

        render() {
                return (
                        <form onSubmit={this.handleSubmit} className="form-add-new-food">
                                <div className="field">
                                        <label className="label">Name</label>
                                        <div className="control">
                                                <input onChange={this.handleChange} className="input" type="text" placeholder="Name of food" value={this.state.name} name='name' />
                                        </div>
                                </div>

                                <div className="field">
                                        <label className="label">Calories</label>
                                        <div className="control">
                                                <input onChange={this.handleChange} className="input" type="number" placeholder="Calories" value={this.state.calories} name='calories' />
                                        </div>
                                </div>

                                <div className="field">
                                        <label className="label">Link of Image</label>
                                        <div className="control">
                                                <input onChange={this.handleChange} className="input" type="text" placeholder="Name of food" value={this.state.image} name='image' />
                                        </div>
                                </div>

                                <div className="field">
                                        <div className="control">
                                                <button className="button is-link">Submit</button>
                                        </div>
                                </div>
                        </form>
                )
        }
}
