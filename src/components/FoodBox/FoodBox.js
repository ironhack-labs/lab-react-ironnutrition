import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './FoodBox.css';

class FoodBox extends Component {
    state = {count: 0}

    counter = event => {
        if (this.state.count === 0) {
            this.setState({count: this.state.count + 1})
        } else if (event.target.value > this.state.count) {
            this.setState({count: this.state.count + 1})
        } else if (event.target.value < this.state.count) {
            this.setState({count: this.state.count - 1})
        }
    }
    
    render() {
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.image} alt={this.props.name} />
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
                                <input className="input" type="number" value={this.state.count} onChange={this.counter} />
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={() => this.props.listHandler(this.props.name, this.state.count, this.props.calories)}>+</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}

export default FoodBox;