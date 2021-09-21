import React, {Component} from 'react';

class FoodBox extends Component {

  state = {
    quantity: 1,
  }

  handleChange = event => {
    const {name, value} = event.target;
    if (value < 0) return;

    this.setState({[name]: value});

  };

  handleUpdateCart = () => {
    const { food, updateCart } = this.props;

    updateCart({ ...food, quantity: +this.state.quantity });
  }
  
  render() {
    const {food} = this.props;

    return (
        <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={food.image} alt={`A ${food.name}`} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{food.name}</strong> <br />
          <small>{food.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange}/>
        </div>
        <div className="control">
          <button onClick={this.handleUpdateCart} className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
    );
   };
};

export default FoodBox;