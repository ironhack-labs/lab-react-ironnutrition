import React from 'react';

class FoodBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      calories: this.props.calories,
      image: this.props.image,
      quantity: this.props.quantity
    }
  }

  onInputChangeHandler = (e) => {
    const value = parseInt(e.target.value);

    this.setState({
      quantity: value
    })
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt={this.props.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input onChange={this.onInputChangeHandler} type="number" className="input" placeholder="0" />
              </div>
              <div className="control">
                <button onClick={() => this.props.selectFood(this.state)} className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
