import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import SingleFood from './SingleFood'
import Foodbox from './Foodbox';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            calories: '',
            image: '',
            formVisible: true,
        }
    }

    //handleChanger

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addFood(this.state);
        this.setState({
            name: '',
            calories: '',
            image: '',
        })
    }

    handleNameInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleCaloriesInput = (event) => {
        this.setState({
            calories: event.target.value
        })
    }

    handleImageInput = (event) => {
        this.setState({
            image: event.target.value
        })
    }

    hideForm = () => {
        this.setState({
            formVisible: false
        })
        console.log('hideForm')
    }

    render() {
        if (this.state.formVisible == false) {
            // return <Foodbox/>
        }

        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="field">
                    <label className="label is-medium">Medium input</label>
                    <div className="control has-icons-left has-icons-right">
                        <input placeholder="meal" className="input is-medium" type="text" value={this.state.name} onChange={(e) => this.handleNameInput(e)} />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope fa-xs"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check fa-xs"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <div className="control has-icons-left has-icons-right">
                        <input placeholder="number of calories" className="input is-medium" type="text" value={this.state.calories} onChange={(e) => this.handleCaloriesInput(e)} />
                        <span className="icon is-left">
                            <i className="fas fa-envelope fa-sm"></i>
                        </span>
                        <span className="icon is-right">
                            <i className="fas fa-check fa-sm"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <div className="control has-icons-left has-icons-right">
                        <input placeholder="image" className="input is-medium" type="text" value={this.state.image} onChange={(e) => this.handleImageInput(e)} />
                        <span className="icon is-medium is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-medium is-right">
                            <i className="fas fa-check"></i>
                        </span>
                    </div>
                </div>
                <button onClick={() => this.hideForm()} type="submit">Submit</button>
            </form>

        )
    }
};

export default Form;