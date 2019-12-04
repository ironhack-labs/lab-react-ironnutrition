import React, { Component } from 'react';


export default class FoodBox extends Component {

    addToFoodList = (e) =>  {
        this.props.addToList(e.target.id);
        
    }
    updateQuantity =(e) => {
        const {id,value} = e.target;
        this.props.updateQuantityOne(id, value);
    }
    render() {
    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">             
                    <img src={this.props.image} alt="food"/>
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{this.props.name}</strong> <br />
                    <small>{this.props.calories} cal</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                    <input
                        className="input"
                        type="number" 
                        placeholder={this.props.quantity}
                        onChange={this.updateQuantity}
                        id={'input-'+this.props.id}
                        
                    />
                    </div>
                    <div className="control">
                    <button className="button is-info"  onClick={this.addToFoodList} id={'btn-'+this.props.id}>
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