import React, { Component } from "react";
import "bulma/css/bulma.css";

class foodforms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 1
    };
  }

  handleQtyChange = function(e) {
    this.setState({ qty: e.target.value });
  };

  render() {
    return (
      <div className="columns">
        <div className="column">
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={this.props.food.image} alt={this.props.food.name} />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{this.props.food.name}</strong> <br />
                    <small>{this.props.food.calories} cal</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input
                      onChange={e => this.handleQtyChange(e)}
                      id="qty"
                      min="1"
                      className="input"
                      type="number"
                      value={this.state.qty}
                    />
                  </div>
                  <div className="control">
                    <button
                      onClick={e =>
                        this.props.addFoodsToday(
                          this.props.food,
                          this.state.qty
                        )
                      }
                      className="button is-info"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default foodforms;
