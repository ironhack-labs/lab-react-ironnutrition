import React, { Component } from 'react';
import "./style.css";

class FoodBox extends Component {

    state = {
        number: 0
      }

    handleInput = (e) => {
        this.setState({
          number: e.target.value
        })
      }
   
    render(){
        const {number} = this.state;
        const { name, calories, image, addFoodList } = this.props;
        return (
            <div className="boxFood">
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={image} />
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
                            <input
                                className="input"
                                type="number" 
                                value={number}
                                onChange={this.handleInput}
                            />
                            </div>
                            <div className="control">
                            <button onClick={ () => addFoodList({name},{image},{calories},this.state.number)} className="button is-info">
                                +
                            </button>
                            </div>
                        </div>
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}

export default FoodBox;