import React, { Component } from "react";

class FoodBox extends Component {
    constructor({quantity, ...props}){
        super({quantity, ...props})
        this.state = {
            quantity: quantity
        }
    }
  
    handleQuantityChange = function(e) {
        this.setState({quantity: e.target.value});
    };
  
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
                            <small>{this.props.calories}</small>
                        </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input
                                    onChange={e => this.handleQuantityChange(e)}
                                    id="quantity"
                                    min="1"
                                    className="input"
                                    type="number"
                                    value={this.state.quantity}
                                />
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={()=>{this.props.updateFood(this.props.name, this.state.quantity)}}>
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
  