import React, { Component } from 'react';


class FoodBox extends Component {

foodItemBar = () => {
    return this.props.data.map((food, i) => {
        return (
          <div className="box is-half" key={i}>
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={this.props.data[i].image} alt={this.props.data[i].name}/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{this.props.data[i].name}</strong> <br />
                    <small>{this.props.data[i].calories} cal</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" type="number" placeholder="1"/>
                  </div>
                  <div className="control">
                    <button className="button is-info" onClick={this.props.addToList}>+</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        );
                    })
                }
    

    render() {
        return (
          <div>
                    {this.foodItemBar()}
          </div>
        );
    }
}

export default FoodBox;