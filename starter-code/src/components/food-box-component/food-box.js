import React from 'react';
import './food-box.css';

class FoodBox extends React.Component {
    constructor(props) {
        super(props);
    }
updateQuantity = (e) =>{
  this.props.updateItem(this.props.food,e.target.value);
}
    render() {
        return (
            <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={this.props.food.image} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{this.props.food.name}</strong> <br />
          <small>{this.props.food.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="number" 
            value={this.props.food.quantity}
            onChange={this.updateQuantity}
          />
        </div>
        <div className="control">
          <button className="button is-info" onClick={()=>{this.props.addSelectedFood(this.props.food)}}>
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
export default FoodBox;