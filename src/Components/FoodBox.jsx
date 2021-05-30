import React from 'react';
// import FoodBox from './Components/FoodBox';

class Foodbox extends React.Component  {
  state = {
    quantity: "",
  };

  handleChange = (event) => {
    
  }

  render (){
  return (

    // Iteration #1 : Create FoodBox component
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src="https://i.imgur.com/eTmWoAN.png" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{this.props.food.name}</strong> <br />
              <small>{this.props.food.calories} calories</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value={this.props.quantity} />
            </div>
            <div className="control">
              <button className="button is-info">+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
}

export default Foodbox;
