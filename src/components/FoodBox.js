import React, { Component } from 'react'

export default class FoodBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.item.name,
            calories: this.props.item.calories,
            image: this.props.item.image,
            quantity: this.props.item.quantity,
        }
    }

    onClick = () => {
        console.log(this.state);
        this.props.onSubmit(this.state);
    }

    handleChange = (e) => {
        this.setState({
            quantity: Number(e.target.value)
        })
    }    

    render() {
        const {name, calories, image, quantity} = this.state;
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={image} alt=""/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>{name}</strong> <br />
                            <small>{calories} cal</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number" onChange={this.handleChange} value={quantity} />
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={this.onClick}>
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
