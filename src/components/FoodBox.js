import React, { Component } from 'react';

class FoodBox extends Component {
  render() {

    const {food} = this.props

    return (
      <div>

        {
            food.map((singleFood, i) => {

                return (
                    
                    <div key= {i} className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={singleFood.image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{singleFood.name}</strong> <br />
                  <small>{singleFood.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value={singleFood.quantity} />
                </div>
                <div className="control">
                  <button className="button is-info">+</button>
                </div>
              </div>
            </div>
          </article>
        </div>
                )

            })
        }



        
      </div>
    );
  }
}

export default FoodBox;
