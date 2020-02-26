import React, { Component } from 'react';

class FormModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            food: {
                name: '',
                calories: '',
                image: 'https://i.imgur.com/eTmWoAN.png',
                quantity: '0'
            },
        }
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            food: {
                ...this.state.food,
                [name]: value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addFood(this.state.food)
        this.setState({
            food: {
                name: '',
                calories: '',
                image: '',
                quantity: '0'
            }
        })
        this.props.openModal()
    }
    render() {
        return (
            <div className={`modal${this.props.className ? ` ${this.props.className}` : ''}`}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <form onSubmit={this.handleSubmit}>
                        <header className="modal-card-head">
                            <p className="modal-card-title">Add Food</p>
                            <button className="delete" aria-label="close" onClick={this.props.openModal}></button>
                        </header>
                        <section className="modal-card-body">
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Food Name" name='name' value={this.state.food.name} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Calories</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Food Calories" name='calories' value={this.state.food.calories} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Image</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Food Image" name='image' value={this.state.food.image} onChange={this.handleChange} />
                                </div>
                            </div>

                        </section>
                        <footer className="modal-card-foot">
                            <button className="button is-success">Add</button>
                            <button type="button" className="button" onClick={this.props.openModal}>Cancel</button>
                        </footer>
                    </form>
                </div>
            </div>
        )
    }
}

export default FormModal