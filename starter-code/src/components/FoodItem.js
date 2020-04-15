import React, {Component} from 'react';

class FoodItem extends Component {

  handleQuantityChange = (e) => {
    const quantity = e.target.value;
    const name = this.props.foodData.name;

    if (quantity < 0 || quantity > 100) return;

    this.props.onChangeQuantity(name, quantity);
  };

  handleAdd = () => {
    const {name, quantity} = this.props.foodData;

    if (quantity === 0) return;

    this.props.onAdd(name);
  };

  render() {
    const {name, calories, image, quantity} = this.props.foodData;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image}/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br/>
                <small>{calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input type="number" className="input" onChange={this.handleQuantityChange} value={quantity}/>
              </div>
              <div className="control">
                <button onClick={this.handleAdd} className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodItem;