import React, { Component } from 'react'
import './FoodBox.css'



class FoodBox extends Component   {


    constructor (props) {
        super(props)
        this.state = {

            quantity: "",


        }
    }

    handleInputChange = e => {

        let { name } = e.target

        this.setState({ [name]: e.target.value })
    }



    render(){
         
        return (
            <>
            <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={this.props.image} alt={this.props.name} />
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
              <input className="input" type="number" name= 'quantity' value={this.props.quantity} onChange={this.handleInputChange} />
            </div>
            <div className="control">
              <button className="button is-info">
                +
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

export default FoodBox