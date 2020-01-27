import React, { Component } from 'react';
import foods from './foods.json';

export default class FoodBox extends Component {

    constructor() {
        super();
        this.state = { foods: foods, 
            name: '',
            calories: '',
            image: '',
            quantity: 0,
            formHidden: true,
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        console.log("submit erledigt")
        const newFood = {
            name: this.state.name,
            calories: this.state.calories,
            image: this.state.image,
            quantity: 0
        }
        this.setState({
            foods: [...this.state.foods, newFood], 
            formHidden: true
        })
    }

    showForm = (event) => {
        this.setState (this.state.formHidden ? {formHidden: false} : {formHidden: true} )
    }

    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({ [name]: value });
    }



    render() {
        return (


            <div className="section">
                <div>
                    <button onClick={this.showForm}>Add new food</button>

                    {this.state.formHidden === false &&
                    <form onSubmit={this.submitForm}>
                        <label>Name</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                        <label>Number of calories</label>
                        <input type="number" name="calories" value={this.state.calories} onChange={this.handleChange} />
                        <label>Image</label>
                        <input type="text" name="image" value={this.state.image} onChange={this.handleChange} />

                        <input type="submit" value="Submit" />

                    </form>}
                </div>

                {this.state.foods.map((oneFood, index) => {
                    return (



                        <div className="container box">
                            <article className="media">
                                <div className="media-left">
                                    <figure className="image is-64x64">
                                        <img src={oneFood.image} alt="foodbild" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <p>
                                            <strong>{oneFood.name}</strong> <br />
                                            <small>{oneFood.calories}</small>
                                        </p>
                                    </div>
                                </div>
                                <div className="media-right">
                                    <div className="field has-addons">
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="number"
                                                value="1"
                                            />
                                        </div>
                                        <div className="control">
                                            <button className="button is-info">
                                                +
          </button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    )
                })}
            </div>
        )
    }
}
