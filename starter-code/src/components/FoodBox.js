import React, { Component } from "react";

class FoodBox extends Component {
  
  state = {
    value: '1',
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  getValues = () => {
    const { name, calories } = this.props;
    const { value } = this.state;
    this.props.addToList(value, name, calories );
  }

  render () {
    const { name, calories, image } = this.props;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} alt=''/>
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
                  onChange={this.handleChange}
                  className="input"
                  type="number" 
                  value={this.state.value}
                />
              </div>
              <div className="control">
                <button onClick={this.getValues} className="button is-info">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default FoodBox;
