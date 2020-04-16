import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class FoodBox extends Component {
    
    state = {
        quantity: this.props.quantity
    }

    handleInput = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
    };


    render() {
        const { name, calories, image, addToList} = this.props;
        const {quantity} = this.state;
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={image} alt={name}/>
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
                        <input
                            className="input"
                            type="number" 
                            name="quantity"
                            value={quantity}
                            onChange={this.handleInput}
                            min="0"
                        />
                        </div>
                        <div className="control">
                        <button className="button is-info" onClick={addToList(name, calories, quantity)}>+</button>
                        </div>
                    </div>
                    </div>
                </article>
            </div>
            );
        }
    }

export default FoodBox;