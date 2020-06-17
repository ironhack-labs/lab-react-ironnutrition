import React, { Component } from 'react';

class FoodBox extends Component {

    state = {
        count: 0
    }

    quantityClick = () => {
        this.setState({
          quantity: this.state.allFood.quantity + 1,
        })
      }
      render() {
          return(
            <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={this.props.image} alt=""/>
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
                    <input className="input" type="number" value={this.props.quantity} />
                  </div>
                  <div className="control">
                    <button className="button is-info">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </article>
            <div>
            <h2>Today's food</h2>
            <p>{this.props.quantity} {this.props.name} - {this.props.calories} cal</p>
            <p>Total calories: cal</p>
            </div>
          </div>
          )
      }
    }

export default FoodBox;