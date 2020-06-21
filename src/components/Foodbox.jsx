import React, { Component } from 'react';
import './Foodbox.css';
import 'bulma/css/bulma.css';
import './Foodbox.css';

class Foodbox extends Component {
    
    addTodaysFood() {
        this.props.addTodaysFoods(this.props)
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
                                <input className="input" type="number" value="1" />
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={e => this.addTodaysFood(e)}>
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
