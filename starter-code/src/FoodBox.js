import React, { Component } from 'react';

class FoodBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            quantity: props.quantity,

        }
    }

    changeHandler = (event) => {

        this.setState({
            quantity: event.target.value
        })
    }
    render() {
        return (<div>
            <div className="container">

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
                                    <strong> {this.props.name}</strong> <br />
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
                                        onChange={this.changeHandler}
                                        value={this.state.quantity}
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

                {/* <div>
                    <h1>Today's Foods:</h1>
                    <p>{this.props.total}Total Calories</p>
                </div> */}


            </div>
        </div>)
    }

}



export default FoodBox;