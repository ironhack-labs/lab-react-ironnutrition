import React, { Component } from 'react'

export default class FoodBox extends Component {
    constructor(){
        super();
        this.state = {
            quantity: 1
        }
        
    }
    handleChange = (e) =>{
        this.setState({
            quantity: parseInt(e.target.value) 
        })
    }
    sendData = e => {
        const addFood = this.props.children
        addFood.quantity = this.state.quantity
        this.props.addTodayHandler(addFood)
    }
    render() {
        return (
            <div className="box">
                <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                    <img src={this.props.children.image ? this.props.children.image : 'images/default.png'} alt={`img-${this.props.children.name}`}/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                    <p>
                        <strong>{this.props.children.name}</strong> <br />
                        <small>{this.props.children.calories} cal</small>
                    </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                    <div className="control">
                        <input className="input" type="number" name="quantity" min={1} onChange={(event) => this.handleChange(event)} value={parseInt(this.state.quantity)} />
                    </div>
                        <input type="hidden" value={this.props.children.key}/>
                    <div className="control">
                        <button onClick={(e) => this.sendData()} className="button is-info">
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
