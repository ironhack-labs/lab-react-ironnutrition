import React, {Component} from 'react'

import '../assets/FoodCard.css'

class FoodCard extends Component{
    state ={
        name: this.props.name,
        image: this.props.image,
        calories: this.props.calories,
        value: 0
    }


    handleChange = (event) => this.setState({value: event.target.value}) 

    render(){
        return(
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.state.image} alt={this.state.name}/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>{this.state.name}</strong> <br />
                            <small>{this.state.calories} cal</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number" value={this.state.value < 0 ? 0 : this.state.value }  onChange={this.handleChange}/>
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

export default FoodCard