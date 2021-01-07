import React, { Component } from 'react';
import './FoodBox.css'

export default class FoodBox extends Component {
        state = {

                quantity: 0

        }
        handleChange = (event) => {

                this.setState({ quantity: Number(event.target.value) })
        }

        handleClick = (event) => {
                const func = event.target.getAttribute('datatype');
                this.props.addFoodOnTodayList({ ...this.props.food, quantity: this.state.quantity }, event.target.getAttribute('datatype'))
            
        }

        render() {
                const { name, calories, image, quantity } = this.props.food;
                return (
                        <div className='box food-box is-grouped'>
                                <article className='media'>

                                        <div className='media-left'>
                                                <figure className=''>
                                                        <img src={image} className='image is-64x64' />
                                                </figure>
                                        </div>

                                        <div className='media-content'>
                                                <div className='content'>
                                                        <p>
                                                                <strong>{name}</strong><br />
                                                                <small>{calories} cal</small>
                                                        </p>

                                                </div>
                                        </div>

                                        <div className='media-right'>
                                                <div className='field has-addons'>
                                                        <div className='control'>
                                                                <input className='input' type='number' value={this.state.quantity}
                                                                        onChange={this.handleChange} min='0' />
                                                        </div>
                                                        <div className='control'>
                                                                <button className='button is-info is-64x64'
                                                                        onClick={this.handleClick} datatype="add">+</button>
                                                        </div>
                                                        <div className='control'>
                                                                <button className='button is-info is-64x64'
                                                                        onClick={this.handleClick} datatype="remove">-</button>
                                                        </div>
                                                </div>
                                        </div>
                                </article>
                        </div>

                )
        }
}
