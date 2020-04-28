import React, { Component } from 'react';
import 'bulma/css/bulma.css'


class FoodBox extends Component {
  state = {
    quantity:0
  }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    render() {
        return (
            <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={this.props.image} alt={this.props.name}/>
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
                    <input
                      className="input"
                      type="number" 
                      name="quantity"
                      value={this.state.quantity}
                      onChange={(e) => this.handleChange(e)}
                    />
                  </div>
                  <div className="control">
                    <button className="button is-info" onClick={() => this.props.addTodaysFood(this.props.index, this.state.quantity)}>
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