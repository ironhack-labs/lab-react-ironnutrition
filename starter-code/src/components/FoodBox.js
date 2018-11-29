import React, { Component } from "react";
import foods from '../foods.json'

import "./FoodBox.css"

class FoodBox extends Component {

    constructor(props){
    super(props);
    this.state = {
      quantity : "1",
    };
  }

  genericSynchronize(event){
    const {value} = event.target
    this.setState({quantity : value})
  }

  handleSubmit(event){
    event.preventDefault();
    const { name, calories } = this.props
    this.props.addTodaysFood({
      name : name,
      calories : calories,
      quantity : this.state.quantity
    })

  }

  render(){
      const { name, calories, image } = this.props
        return(

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
                    <small>{calories}</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input
                      className="input"
                      onChange={event => this.genericSynchronize(event)}
                      type="number" 
                      value={this.state.quantity}
                      placeholder="1"
                    />
                  </div>
                  <div className="control">
                    <button onClick={event => this.handleSubmit(event)} className="button is-info">
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

export default FoodBox;