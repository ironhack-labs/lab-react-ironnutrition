import React from 'react'
import {Component} from 'react'
import './Foodbox.css'
import foods from './foods.json';

class Foodbox extends Component{
    constructor(props, ){
        super(props)
        this.state = {
            foods: foods,
            quantity: '1'
        }
    }
    handleInputChange(e){
        const name = e.target.name
        const value = e.target.value 
        this.setState({ [name]: value })
    }

    


    render(){
        return (

        <>
        <div className = "box" >
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={this.props.image} />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{this.props.name}</strong> <br />
                            <small>{this.props.calories}</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" name="quantity"  type="number" value={this.state.quantity} onChange={e => this.handleInputChange(e)}  />
                        </div>
                        <div className="control">
                            <button className="button is-info">
                         </button>
                        </div>
                    </div>
                </div>
            </article>
    </div>
    </>
    
    
    )
        
    }
   
       
}

export default Foodbox