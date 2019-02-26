import React from 'react';

class FoodBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1
    }
  }

  addMenu = () => {
    this.props.onModifyMenu({
      name: this.props.name,
      calories: this.props.calories,
      quantity: this.state.quantity
    })
  }


  handleChange = (event) => {
    if ( event.target.value >= 0) {
      this.setState({ quantity: event.target.value})
    }
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} />
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
                <input
                  className="input"
                  type="number" 
                  value={this.state.quantity}
                  onChange={this.handleChange}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.addMenu}>
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