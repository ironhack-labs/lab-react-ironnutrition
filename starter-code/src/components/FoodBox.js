import React, { Component } from 'react';
import './FoodBox.css';

export class FoodBox extends Component {
    constructor(props){
        super(props);
        this._handleQuantityChange=this._handleQuantityChange.bind(this);
        this._addToTodaysFoods=this._addToTodaysFoods.bind(this);
    }
    _handleQuantityChange(event){
        let newcount=event.target.value;
        this.props.updateQuantity(this.props.name,newcount);
    }
    _addToTodaysFoods(){
        this.props.addToTodaysFoods(this.props.name,this.props.quantity);
    }
    render() {
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src="https://i.imgur.com/eTmWoAN.png" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{this.props.name}</strong> <br />
                                <small>{this.props.calories}</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input
                                    className="input"
                                    type="number" 
                                    value={this.props.quantity}
                                    onChange={this._handleQuantityChange}
                                />
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={this._addToTodaysFoods}>
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

export default FoodBox;
