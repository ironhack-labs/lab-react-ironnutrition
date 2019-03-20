import React, { Component } from "react";

class FoodBox extends Component {
  constructor(props) {

    // sin presencia del método super(), this retornará undefined. Es obligatorio.
    super(props);
    this.state = {
      quantity: 1,
      
    }
  }


   handleChange = (e) => {
      let { value } = e.target
      this.setState({ quantity: value })
    }


  render() {
    return (
      <div className="box my-box">
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
                <small>{this.props.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" min="0" value={this.state.quantity} type="number" placeholder="0" onChange={(e) => this.handleChange(e)} />
              </div>
              <div className="control">
                <button className="button is-info" onClick={() => this.props.addTodaysFoods(this.props.name, this.state.quantity, this.props.calories)}>+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
