import React, { Component } from 'react';

class FoodBox extends Component {
    
    constructor() {
        super()
        this.state = {quantity: 1}
    }

    handleChange(e) {
        let {value } = e.target;
        this.setState({quantity: value});
    }

    clickHandler(e) {
        console.log(this.props.name)
        this.props.addTodayFood({
            name: this.props.name,
            quantity: this.state.quantity,
            calories: this.props.calories
        })
    }



    render (){
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
                        { <input
                            className="input"
                            type="text" 
                            value= {this.state.quantity}
                            onChange={(e) => this.handleChange(e)}
                        />}
                        </div>
                        <div className="control">
                        <button onClick={(e) => this.clickHandler(e)} className="button is-info">
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

export default FoodBox;