import React, { Component } from 'react';
import './Foodbox.css';
import 'bulma/css/bulma.css';
import './Foodbox.css';

class Foodbox extends Component {
    // constructor({quantity, ...props}) {
    //     super({quantity, ...props});
    // }

    state = {
        quantity: 0
    }
    
    addTodaysFood() {
        this.props.addTodaysFoods(this.props, this.state.quantity)
    }

    updateQuantity = (event) => {
        this.setState({
          quantity: event.target.value
        })
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
                                <input className="input" type="number" min="0" value={this.state.quantity} onChange={e => this.updateQuantity(e)}/>
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={() => this.addTodaysFood()}>
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

export default Foodbox;
