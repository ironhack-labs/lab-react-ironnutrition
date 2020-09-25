// Library
import React from 'react';

class FoodBox extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            quantity: 1,
        }
    }

    handleQuantity = (event) => {
        this.setState({
            quantity: event.currentTarget.value
        })
    }

    render() {
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={this.props.item.image} />
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{this.props.item.name}</strong> <br />
                        <small>{this.props.item.calories} cal</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input onChange={this.handleQuantity} className="input" type="number" value={this.state.quantity} />
                        </div>
                        <div className="control">
                        <button onClick={() => this.props.onAdd(this.props.id, this.state.quantity)} className="button is-info">
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

export default FoodBox