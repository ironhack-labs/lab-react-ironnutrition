import React, { Component } from 'react';
import 'bulma/css/bulma.css';
// import foods from '../foods.json';

class FoodBox extends Component{
    
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
                                <input className="input" type="number" value={comida.quantity}/>
                            </div>
                            <div className="control">
                                <button className="button is-info">+</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

        )
    }
}

export default FoodBox;


