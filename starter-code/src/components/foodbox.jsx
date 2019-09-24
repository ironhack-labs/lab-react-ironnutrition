import React, { Component } from 'react';
import { Link, Route } from "react-router-dom"
import Form from './form';

class FoodBox extends Component {

    render() {

        return (
            <div>
                <div
                    className="box">
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
                                    <small>{this.props.calories} cal</small>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <div className="field has-addons">
                                <div className="control">
                                    <input
                                        className="input"
                                        type="number"
                                        value="1"
                                    />
                                </div>
                                <div className="control">
                                    <button className="button is-info">
                                        +
                </button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>


                {/* END OF FOOD COMPONENT */}

                {/* <Link
                    to={'/create'}
                    className="button"> Add Food
                </Link>

                <div>
                    <Route
                        path="/create"
                        render={(props) =>
                            <Form
                                onChange={this.props.onChange}
                                name={this.props.name}
                                calories={this.props.calories}
                                image={this.props.image}
                                onSubmit={this.props.onSubmit}
                                {...props} />}
                    />
                </div> */}



            </div>
        );
    }
}

export default FoodBox;