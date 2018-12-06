import React, { Component } from 'react';

class Foodbox extends Component {

    state = {
        quantity: 0 
    }
    addFood = () =>{
        var foodObject = {
            name: this.props.name,
            calories: this.props.calories,
            image: this.props.image, 
            quantity: this.state.quantity
        }
        this.props.addFood(foodObject)
    }
        render() {
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
                        <small>cal {this.props.calories}</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input
                            className="input"
                            type="number" 
                            placeholder="1"
                        />
                        </div>
                        <div className="control">
                        <button onClick={this.addFood} className="button is-info">
                            +
                        </button>
                        </div>
                    </div>
                    </div>
                </article>
        </div>
        );
    }
}


export default Foodbox;