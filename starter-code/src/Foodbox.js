import React, {Component} from 'react';
import './Foodbox.css'

class Foodbox extends Component {

addEaten = () =>{
  var foodObject = {
    name: this.props.name,
    calories: this.props.calories,
    image: this.props.image
  }
  this.props.addFood(foodObject)
}

  render(){
    return (
      <div className="box">
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
                <small>{this.props.calories} Calories</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="text" 
                  value="0"
                />
              </div>
              <div className="control">
                <button onClick={this.addEaten} className="button is-info">
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

export default Foodbox