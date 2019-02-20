import React, { Component } from 'react';
import Button from '../button/Button';

class FormFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            calories: Number,
            image: '',
            quantity: 0
        }
        this.updateState = this.updateState.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    updateState(e) {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value })
        console.log(this.state)
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const listFoods = this.props.foods;
        listFoods.push(this.state);
        console.log('aqui');
        this.props.updateStateFoods(listFoods);
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Name</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input className="input" onChange={(e) => this.updateState(e)} value={this.state.name} type="text" placeholder="Name" name='name' />
                            </p>
                        </div>
                    </div>
                </div>

                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Calories</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input className="input" type="number" placeholder="Calories" name='calories' onChange={(e) => this.updateState(e)} value={this.state.calories} />
                            </p>
                        </div>
                    </div>
                </div>

                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Image Url</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input className="input" type="text" placeholder="Image Url" name='image' onChange={(e) => this.updateState(e)} value={this.state.image} />
                            </p>
                        </div>
                    </div>
                </div>

                <input type='submit' value='submit'></input>
            </form>
        );
    }
}

export default FormFood;
