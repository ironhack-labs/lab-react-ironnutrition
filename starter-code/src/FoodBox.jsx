import React, { Component } from 'react';
import foods from './foods.json'
import './FoodBox.css'

class FoodBox extends Component {
    constructor(props){
        super(props)
        this.state={
        name: foods.name,
        image: foods.image,
        calories: foods.calories, 
        quantity: foods.quantity,
        }

      }

    incrementQuantity = (e) => {
       
        this.setState({
            quantity: e.target.value
        })
    }

   render(){
       return(
    
           <div className="box">
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={this.props.image} alt=''/>
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{this.props.name}</strong> 
                    <br />
                    <small>{this.props.calories}</small>
                    </p>
                    </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input
                                className="input"
                                type="number" 
                                onChange = {this.incrementQuantity}
                                value= {this.props.quantity}
                                />
                            </div>
                        <div className="control">
                            <button onClick={e => {this.props.add(e, this.props.name, this.props.calories, this.state.quantity)}} className="button is-info">+</button>
                        </div>
                        </div>
                    </div>
            </article>
        </div>
     
                 )
            }
    }
 
export default FoodBox 