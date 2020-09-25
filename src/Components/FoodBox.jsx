import { render } from '@testing-library/react'
import React from 'react'
import './style.css'
import foods from '../foods.json';
import ButtonNewFood from './ButtonNewFood';
import InputWithLabel from './InputWithLabel'

export default class FoodBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            foods: foods,
            name: '',
            calories: '',
            image: '',
            showForm: false,
            
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleShowForm() {
        this.setState(currentState => ({
            showForm: !currentState.showForm
        }))
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit(e) {
        console.log('entra')
        e.preventDefault();
        let newFood = {
            name: this.state.name,
            calories: Number(this.state.calories),
            image: this.state.image
        }
        
        this.setState({
            foods: [newFood, ...this.state.foods]
        })

        this.setState(currentState => ({
            showForm: !currentState.showForm
        }))
      
    }

    render() {
        return (
            <div className='container'>
                <ButtonNewFood onClick={() => this.handleShowForm()} />
                {this.state.showForm &&
                    <form onSubmit={this.handleSubmit}>
                        <InputWithLabel
                            name='name'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <InputWithLabel
                            name='calories'
                            value={this.state.calories}
                            onChange={this.handleChange}
                        />
                        <InputWithLabel
                            name='image'
                            value={this.state.image}
                            onChange={this.handleChange}
                        />
                        <button type="submit" className='button is-success'>Submit</button>
                    </form>
                }
                {this.state.foods.map((food, i) => {
                    return (
                        <div className="box" key={i}>
                            <article className="media">
                                <div className="media-left">
                                    <figure className="image is-64x64">
                                        <img src={food.image} />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <p>
                                            <strong>{food.name}</strong> <br />
                                            <small>{food.calories}</small>
                                        </p>
                                    </div>
                                </div>
                                <div className="media-right">
                                    <div className="field has-addons">
                                        <div className="control">
                                            <input className="input" type="number" value={food.quantity} />
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
                })
                }
            </div>


        )

    }

}

