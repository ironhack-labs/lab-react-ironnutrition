import React, { Component } from 'react';

class foodBox extends Component {

    state = {
      quantity: 1
    };


    handleChange = (event) => {
        const { value } = event.target;
        this.setState({ quantity: +value});
    };

    render() {

        const { name, calories, image } = this.props;

        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={ image } alt='Food'/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{ name }</strong> <br />
                                <small>{ calories } cal</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input
                                    className="input"
                                    type="number"
                                    value={ this.state.quantity }
                                    onChange={ this.handleChange }
                                />
                            </div>
                            <div className="control">
                                <button
                                    className="button is-info"
                                    onClick={ () => this.props.addNewProduct({ quantity:this.state.quantity, name, calories }) }
                                >
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

export default foodBox;