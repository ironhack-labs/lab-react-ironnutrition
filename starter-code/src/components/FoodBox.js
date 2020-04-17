import React, { Component } from 'react';
import 'bulma/css/bulma.css';
// import foods from '../foods.json';

class FoodBox extends Component{
    
    state = {
        quantityToAdd: 0
    }

    handleClickAddTodaysFoods = (food) => {
        const {addFoodToTodaysFoods} = this.props;
        addFoodToTodaysFoods(food, this.state.quantityToAdd)
    }

    actualizarValue = (e) => {
        console.log(e.target.value)
        this.setState({quantityToAdd: e.target.value})
    }

    render(){
        const { comida } = this.props;

        return(
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={comida.image} alt=""/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{comida.name}</strong> <br />
                                <small>{comida.calories}</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number" onChange={this.actualizarValue}/>
                            </div>
                            <div className="control">
                                {/* Se crea una función anónima porque sino la función 'handleClickAddTodaysFoods' sería llamada al hacer un render del elemento, sin esperar a hacer click. */}
                                <button className="button is-info" onClick={() => this.handleClickAddTodaysFoods(comida)}>+</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

        )
    }
}

export default FoodBox;


