import React from 'react';

class FoodBox extends React.Component {

    changeHandler = (e) => {
        e.preventDefault();
        let food = this.props.food
        this.props.quantityHandler(food, e.target.value);
    }

    addToListButtonHandler = () =>{
        let food = this.props.food;
        this.props.addToListHandler(food);
    }

    render() {
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.food.image} alt="food"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{this.props.food.name}</strong> <br />
                                <small>{this.props.food.calories}</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input
                                    className="input"
                                    type="number"
                                    value={this.props.food.quantity}
                                    onChange={(e) => {this.changeHandler(e)}}
                                />
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={this.addToListButtonHandler}>
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

export default FoodBox;
