import React, { Component } from 'react';

class FoodBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
      }

    submitFood = (e) =>{
        e.preventDefault();
        // console.log('submitted');
        this.props.inputSubmit({
            name: this.props.name,
            calories: (this.props.calories*this.state.quantity),
            quantity: this.state.quantity
        })
    }
    handleChange = (e) =>{
        this.setState({quantity: e.target.value});
        // console.log(this.state.quantity);
    }
    render() {
        return (
            <div className="FoodBox">
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
                                <small>{this.props.calories} cals</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input
                                    className="input"
                                    type="number"
                                    // placeholder="1"
                                    value={this.state.quantity}
                                    min="1" 
                                    max="100"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={this.submitFood} >+</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
                
            </div>
        );
    }
}

export default FoodBox;