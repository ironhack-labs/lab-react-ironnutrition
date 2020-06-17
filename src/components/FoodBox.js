import React, { Component } from 'react';

class FoodBox extends Component {

    state = {
        count: 0,
        list: []
    }

    quantityClick = (event) => {
        let quantity = event.target.value;
        this.setState({
          count: quantity
        })
      }
      addClick = (event) => {
        this.setState({

      })
    }
      render() {
          return(
            <div>
            <article class="column" className="media">
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
                    <input className="input" type="number" onChange={this.quantityClick} value={this.state.count} />
                  </div>
                  <div className="control">
                    <button onClick = {() => {
                        this.props.clickList(this.props.food)}} >
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