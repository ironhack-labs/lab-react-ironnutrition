import 'bulma/css/bulma.css';
import { Component } from 'react';

class FoodBox extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
    };
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState(
      { quantity: e.target.value },
      this.props.onChange(this.props.id, this.state.quantity)
    );
  }

  render() {
    const { image, name, calories, quantity } = this.props;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} alt={name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  onChange={(e) => this.handleChange(e)}
                />
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

export default FoodBox;
