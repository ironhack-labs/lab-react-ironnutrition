import React, { Component } from 'react'

export class FoodBox extends Component {
    state={
        quantity:0
    }
    handleChange = e =>(this.setState({quantity:e.target.value}));
    handleClick = () =>{
        return this.props.addTodaysFood({quantity:this.state.quantity, name:this.props.food.name, calories:this.props.food.calories})
    }
    render() {
        const {name, calories, image} = this.props.food
        return (
            <div className="box">
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={image} />
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{name}</strong> <br />
                    <small>{calories} cal</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                    <input className="input" type="number" value={this.state.quantity} onChange={this.handleChange}/>
                    </div>
                    <div className="control">
                    <button className="button is-info" onClick={this.handleClick}>
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

export default FoodBox
