import React, { Component } from 'react';

class FoodBox extends Component {

    state = {
        quantity: 1
    }

    handleChange = (event) => {
        const { value } = event.target;
        this.setState({
        quantity: Number(value)
        });
    };

    render(){
        return(
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={this.props.image} alt="food"/>
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
                        <input className="input" type="number" name="quantity" value={this.state.quantity} min="1" onChange={(e) => this.handleChange(e)}/>
                        </div>
                        <div className="control">
                        <button className="button is-info" onClick={() => this.props.todaysFoods(this.props.name, this.state.quantity)}>
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