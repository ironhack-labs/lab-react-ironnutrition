import React, { Component } from 'react';

class Foodbox extends Component {
    constructor(props){
        super(props);

        this.state = {
            quantity: props.food.quantity,
        }

        this.onButtonClick = this.onButtonClick.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
    }

    onButtonClick(){
        const newObj = {
            ...this.props.food,
            quantity: this.state.quantity,
        }
        this.props.addFoodToList(newObj);
    }

    updateQuantity(event){
        this.setState({
            quantity: parseInt(event.target.value),
        })
    }

    render() {
        return (
            <div className={`box ${this.props.food.hidden ? 'hidden' : ''}`}>
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.food.image} />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{this.props.food.name}</strong> <br />
                                <small>{this.props.food.calories} cal</small>
                            </p>
                        </div>
                        </div>
                            <div className="media-right">
                            <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number" value={this.state.quantity} onChange={(e) => { this.updateQuantity(e)}}/>
                            </div>
                            <div className="control">
                                <button onClick={this.onButtonClick} className="button is-info">+</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default Foodbox;
