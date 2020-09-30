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

    onClickAdd = (event) => {
        let stateCopy = {...this.state};
        if (event.target.innerText === "-") stateCopy.quantity *= -1;
        this.props.onSubmit(stateCopy);
    }

    handleChange = (e) => {
        const foodQuantity = Number(e.target.value);
        this.setState({
            quantity: foodQuantity > 0 ? foodQuantity : 0
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
                                <button className="button is-info" onClick={this.onClickAdd}>
                                    +
                                </button>
                                <button className="button is-danger" onClick={this.onClickAdd}>
                                    -
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}
