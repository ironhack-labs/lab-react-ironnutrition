import React, { Component } from 'react';

class FoodDetail extends Component {
  render() {

    const {myFood} = this.props

    return (
     
     



      <div className="box">
      
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={myFood.image} alt="someFood" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{myFood.name}</strong> <br />
              <small>{myFood.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value="1" />
            </div>
            <div className="control">
            {/* pass func here? when user clicks, food added on right?? */}
              <button className="button is-info" /*onClick= {this.handleAdd} */>
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
        
       
      
      
    );
  }
}

export default FoodDetail;
