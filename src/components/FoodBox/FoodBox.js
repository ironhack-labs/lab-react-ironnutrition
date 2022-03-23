import React, {Component} from "react";
import foods from '../../foods.json';

class FoodBox extends Component {

  state = {
  }

  addNewFood = () => {

  }

  render() {
    return (
      <div>
      <div className="box">
        {
        foods.map(( {image, name, calories, quantity}, index ) => {
       return (
      <article className="media" key={index} >
        <div className="media-left">
          <figure
            className="image is-64x64">
            <img
            src={image}
            alt="foods-img"/>
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
              <input className="input" type="number" value="1" />
            </div>
            <div className="control">
              <button className="button is-info">
                + {quantity}
              </button>
            </div>
          </div>
        </div>
      </article>
    ) 
    })
  }
    </div>
      </div>
    )
  }
}

export default FoodBox;