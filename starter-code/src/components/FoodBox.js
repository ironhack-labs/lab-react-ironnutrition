import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from '../foods.json'

class FoodBox extends Component 
{
  state = {
    foods:foods
  }

  showFoods = () => 
  {
    let listItems = this.state.foods.map((item, i) => 
    {
      return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={item.image}/>
            </figure>
          </div>
          
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{item.name}</strong> <br />
                <small>{item.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                  <input
                    className="input"
                    type="number" 
                    value="1"
                  />
              </div>
              <div className="control">
                <button className="button is-info">
                +
                </button>
              </div>
              <br/>

            </div>
          </div>
        </article>
      </div>
      )
    })
    return listItems;
  }

  render() {
      return (
          <ul>{this.showFoods()}</ul>
      )
  }
}

export default FoodBox;
