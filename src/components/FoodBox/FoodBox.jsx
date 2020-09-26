import React from 'react';

class FoodBox extends React.Component {
    state = {
        quantity: 1
    }

    handelClick = () => {
        this.props.food.quantity = this.state.quantity
        this.props.onAddToMenu(this.props.food);
    }

    handleChange = (e) => {
        this.setState({ quantity: e.target.value })
    }

    changeFoodQuantity = (e) => {
        this.setState({ quantity: e.target.value })
    }

    render() {
        return (
            <div className="box column mt-2">
                <article className="media">

                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.food.image} alt={this.props.food.name}/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{this.props.food.name}</strong> <br />
                                <small>{this.props.food.calories} cal</small>
                            </p>
                        </div>
                    </div>

                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input 
                                    className="input" 
                                    type="number" 
                                    value={this.state.quantity}
                                    onChange={this.changeFoodQuantity}
                                />
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={this.handelClick}> + </button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
   
}

export default FoodBox