import React, { Component } from 'react';
import 'bulma/css/bulma.css';


class AddFoods extends Component {

    constructor(props) {
        super(props)
        this.state = {
            food: {
                name: '',
                calories: 0,
                image: "https://i.imgur.com/eTmWoAN.png",
            },
            form: true
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
            },
        })
    }


    render() {
        return (
            <div>
                <div className={this.props.className}>
                    <div className="modal-background"></div>
                    <div className="modal-content">
                        <div>
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input className="input" type="text" name="name" placeholder="Add name" value={this.state.food.name} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Calories</label>
                                <div className="control">
                                    <input className="input" type="text" name="calories" placeholder="Add the calories" value={this.state.food.calories} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Image</label>
                                <div className="control">
                                    <input className="input" type="text" name="image" placeholder="Add a url" value={this.state.food.image} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="field is-grouped">
                                <div className="control">
                                    <button className="button is-link" onClick={this.handleSubmit}>Submit</button>
                                </div>

                            </div>

                        </div>
                    </div>
                    <button onClick={this.props.closeModal} className="modal-close is-large" aria-label="close"></button>
                </div>

            </div>



        )
    }
}


export default AddFoods;