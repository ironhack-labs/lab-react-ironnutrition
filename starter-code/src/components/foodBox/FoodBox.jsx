import React, { Component } from 'react';

export default class FoodBox extends Component {

    state={
        quantity:1
    }

    handleQuantityState = (e)=>{
        this.setState({
            ...this.state,
            quantity:e.target.value
        })
    }

    addClickHandle = (e)=>{
        this.props.addFoodToList(this.state.quantity, this.props)
    }

    render(){
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={this.props.image} />
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
                            value={this.state.quantity}
                            onChange={this.handleQuantityState}
                        />
                        </div>
                        <div className="control">
                        <button className="button is-info" onClick={e=>this.addClickHandle(e)}>
                            +
                        </button>
                        </div>
                    </div>
                    </div>
                </article>
            </div>
        )
    } 

}