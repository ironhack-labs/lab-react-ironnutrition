import React from 'react';
import './FoodBox.css';
import 'bulma/css/bulma.css';

class FoodBox extends React.Component {
    state = {
        qtde: 0
    }

    render() {
        const { food } = this.props;

        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={food.image} alt={food.name} />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{food.name}</strong> <br />
                                <small>{food.calories} cal</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number" value={this.state.qtde} onChange={(e) => this.onChange(e)} />
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={() => this.props.addTodayFoodMethod({...food, quantity: this.state.qtde})}>+</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        );
    }

    onChange(event) {
        this.setState({ qtde: event.target.value })
    }
}

export default FoodBox;