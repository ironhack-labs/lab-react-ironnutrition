import React, { Component } from 'react'

export default class FoodDetail extends Component {
    //{name, calories, image, quantity, updateFood, ...props}
    constructor({quantity, ...props}){
        super({quantity, ...props})
        this.state = {
            quantity: quantity
        }
        this.handleQuantityInputChange = this.handleQuantityInputChange.bind(this);
    }

    handleQuantityInputChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
        <div className="box food-box">
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={this.props.image} alt=''/>
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{this.props.name}</strong> <br />
                    <small>{this.props.calories} cal</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                    <input
                        className="input"
                        type="number" 
                        name="quantity"
                        onChange={this.handleQuantityInputChange}
                        value={this.state.quantity}
                    />
                    </div>
                    <div className="control">
                        <button className="button is-info" onClick={()=>{this.props.updateFood(this.props.name, this.state.quantity)}}>
                            +
                        </button>
                    </div>
                    <div className="control">
                        <i onClick={()=>{this.props.removeFood(this.props.name)}} class="food-form-delete is-info"/>
                    </div>
                </div>
                </div>
            </article>
        </div>
        )
    }
}