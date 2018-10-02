import React, { Component } from 'react';




class FoodBox extends Component {

  constructor(props){
      super();

      this.state = { 
        name: props.name,
        image: props.image,
        calories: props.calories,
        quantity: 1,
      }
  }

  
    handleClick(e) {
      e.preventDefault();
      let {name, quantity, calories} = this.state;
      calories = calories * quantity
      this.props.todayTotal({name, quantity, calories})
    
    
    }
  

    render() {
     
     return (
    <div>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.state.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.state.name}</strong> <br />
                <small>{this.state.calories}</small>
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
                <button className="button is-info" onClick={this.handleClick.bind(this)}>
                  +
          </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
 }  
}

export default FoodBox;